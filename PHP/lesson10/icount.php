<?
    /**
     * פונקציה לשליחת קריאות API ל-Icount
     * @param url קישור של ה-API
     * @param params תוכן הפנייה
     */
    function icount($url, $params) {
        // יצירת אובייקט של קריאת HTTP
        $ch = curl_init($url);

        // הגדרת הקריאה כ-POST
        curl_setopt($ch, CURLOPT_POST, 1);
        // הוספת הפרמטרים לגוף הקריאה
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($params));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        // מאפשר לפנות ל-API מאובטח מדומיין לא מאובטח
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);

        // יוצר את הקריאה בפועל ומחזיר את התוכן
        $response = curl_exec($ch);
        // מחזיר את פרטי הקריאה (Headers וכו')
        $info = curl_getinfo($ch);

        // בודק אם אין סטטוס לפניה או שזה לא 200 - מציג אצ השגיאה ועוצר את הסקריפט.
        if (!$info["http_code"] || $info["http_code"] != 200) {
            echo var_dump($info);
            die();
        }

        // ממיר את תוכן הפנייה למערך (אובייקט)
        $json = json_decode($response, true);

        // אם אין סטטוס בתוכן (זה שייך ל-API של Icount)
        if (!$json["status"]) {
            echo var_dump($json);
            die();
        }

        // מחזיר את תוכן הקריאה
        return $json;
    }
?>