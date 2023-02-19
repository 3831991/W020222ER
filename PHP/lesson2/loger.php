<?
    function addLog($str) {
        $d = date("d_m_Y");
        $logFile = "files/log_$d.txt";

        $text = '';

        if (file_exists($logFile)) {
            $text = file_get_contents($logFile);
        }

        $text .= date("Y-m-d H:i:s") . ' - ' . $str . PHP_EOL;
        $text .= '----------------------------------------------' . PHP_EOL;

        file_put_contents($logFile, $text);
    }
?>