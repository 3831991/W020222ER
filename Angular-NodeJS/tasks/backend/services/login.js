import { con } from '../sqlConnect';

// פונקציה לקבלת סטטוס החיבור של היוזר
// تحاول الوظيفة الحصول على حالة اتصال المستخدم
export function getLoginStatus(req, res) {
    if (req.session.user) {
        res.send({
            status: 'success',
            user: req.session.user,
        });
    } else {
        res.send({
            status: 'error',
        });
    }
}

export function logout(req, res) {
    // בהתנתקות אנחנו פשוט מוחקים את המשתנה של היוזר מהסשיין
    // عند قطع الاتصال ، نحذف ببساطة متغير المستخدم من الجلسة
    delete req.session.user;
    res.send();
}

export function login(req, res) {
    // בתור התחלה אנחנו מוחקים את המשתמש הנוכחי מהסשיין
    // لنبدأ بحذف المستخدم الحالي من الجلسة
    delete req.session.user;

    // יותרים משתנה חדש בסשיין (אם לא קיים) - לצורך ספירת מספר ניסיונות החיבור
    // أضف متغيرًا جديدًا إلى الجلسة (إذا لم يكن موجودًا) - لغرض حساب عدد محاولات الاتصال
    if (!req.session.attempts) {
        req.session.attempts = 0;
    }

    // אם היוזר ניסה להתחבר יותר מ-7 פעמים - הוא נחסם
    // إذا حاول الزائر الاتصال أكثر من 7 مرات - تم حظره
    if (req.session.attempts >= 7) {
        res.send({
            status: 'error',
            message: "נסיונות חיבור מרובים",
        });

        return;
    }

    const sqlQuery = "SELECT * FROM `users` WHERE `userName`=? AND `password`=MD5(?)";
    // trim: פונקציה המנקה רווחים מצידי הטקסט
    // trim: وظيفة تنظف المسافات من جوانب النص
    const paramArr = [req.body.userName.trim(), req.body.password.trim()];

    con.query(sqlQuery, paramArr, (err, result) => {
        // אם יש שגיאה בשאליתה
        // إذا كان هناك خطأ في التحقق من الصحة
        if (err) {
            console.log(err);

            req.session.attempts++;

            res.send({
                status: 'error',
                message: "שגיאה לא מוגדרת",
            });

            return;
        }

        // אם אין אף יוזר העונה לשאילתא
        // إذا لم يكن هناك غريب يجيب على الاستعلام
        if (!result.length) {
            req.session.attempts++;

            res.send({
                status: 'error',
                message: "שם משתמש או סיסמה לא נכונים",
            });
        } else {
            // אם החיבור הצליח
            // מנקים את המשנה שסופר נסיונות חיבור כושלים

            // إذا كان الاتصال ناجحًا
            // مسح الفرع الذي يحسب محاولات الاتصال الفاشلة
            delete req.session.attempts;

            const user = result[0];
            req.session.user = user;

            res.send({
                status: 'success',
                user,
            });
        }
    });
}