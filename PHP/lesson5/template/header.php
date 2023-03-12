<div class="p-5 bg-dark text-white text-center">
    <? if (isset($_SESSION['user'])) { ?>
        <p class="userName"><?= $_SESSION['user']['fullName'] ?>, ברוך הבא!</p>
    <? } ?>

    <h1>אתר חדשות משמחות</h1>
    <p>אתר חדשות חדשני הנקי מכל רבב פוליטי</p>
</div>