<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <div class="container-fluid">
        <ul class="navbar-nav">
            <li class="nav-item">
                <a class="nav-link active" href="home.php"><i class="fas fa-home"></i> בית</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="about.php"><i class="fas fa-info-circle"></i> אודות</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="contact.php"><i class="fas fa-phone"></i> צור קשר</a>
            </li>
        </ul>

        <? if (!isset($_SESSION['user'])) { ?>
            <ul class="navbar-nav navbar-left">
                <li class="nav-item">
                    <a class="nav-link" href="login.php"><i class="fas fa-sign-in-alt"></i> התחבר</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="signup.php"><i class="fas fa-edit"></i> הרשם</a>
                </li>
            </ul>
        <? } else { ?>
            <ul class="navbar-nav navbar-left">
                <li class="nav-item">
                    <a class="nav-link" href="user-area.php"><i class="fas fa-user"></i> איזור אישי</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#"><i class="fas fa-sign-out-alt"></i> התנתק</a>
                </li>
            </ul>
        <? } ?>
    </div>
</nav>