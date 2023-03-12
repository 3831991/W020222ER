<?
    $path = explode('/', $_SERVER['SCRIPT_FILENAME']);
    $active = array_pop($path);

    $menu = [
        [ 'path' => 'home.php', 'icon' => 'home', 'name' => 'בית' ],
        [ 'path' => 'about.php', 'icon' => 'info-circle', 'name' => 'אודות' ],
        [ 'path' => 'contact.php', 'icon' => 'phone', 'name' => 'צור קשר' ],
    ];
?>

<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <div class="container-fluid">
        <ul class="navbar-nav">
            <? foreach ($menu as $m) { ?>
                <li class="nav-item">
                    <a class="nav-link <?= $active == $m['path'] ? 'active' : '' ?>" href="<?= $m['path'] ?>"><i class="fas fa-<?= $m['icon'] ?>"></i> <?= $m['name'] ?></a>
                </li>
            <? } ?>
        </ul>

        <? if (!isset($_SESSION['user'])) { ?>
            <ul class="navbar-nav navbar-left">
                <li class="nav-item">
                    <a class="nav-link <?= $active == 'login.php' ? 'active' : '' ?>" href="login.php"><i class="fas fa-sign-in-alt"></i> התחבר</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link <?= $active == 'signup.php' ? 'active' : '' ?>" href="signup.php"><i class="fas fa-edit"></i> הרשם</a>
                </li>
            </ul>
        <? } else { ?>
            <ul class="navbar-nav navbar-left">
                <li class="nav-item">
                    <a class="nav-link <?= $active == 'user-area.php' ? 'active' : '' ?>" href="user-area.php"><i class="fas fa-user"></i> איזור אישי</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="logout.php"><i class="fas fa-sign-out-alt"></i> התנתק</a>
                </li>
            </ul>
        <? } ?>
    </div>
</nav>