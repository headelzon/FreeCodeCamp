<html>
<body>
    
    <?php
    
    function get_client_ip() {
        $ipaddress = '';
        if (isset($_SERVER['HTTP_CLIENT_IP']))
            $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
        else if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
            $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
        else if(isset($_SERVER['HTTP_X_FORWARDED']))
            $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
        else if(isset($_SERVER['HTTP_FORWARDED_FOR']))
            $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
        else if(isset($_SERVER['HTTP_FORWARDED']))
            $ipaddress = $_SERVER['HTTP_FORWARDED'];
        else if(isset($_SERVER['REMOTE_ADDR']))
            $ipaddress = $_SERVER['REMOTE_ADDR'];
        else
            $ipaddress = 'UNKNOWN';
        return $ipaddress;
    }
    
    $myFile = "results.txt";
    $fh = fopen($myFile, 'a') or die("can't open file");
    
    $ip = get_client_ip();
    $length += strlen($ip);
    $firstName = $_POST['firstName'];
    $length += strlen($firstName);
    $lastName = $_POST['lastName'];
    $length += strlen($lastName);
    $birthdate = $_POST['birthdate'];
    $length += strlen($birthdate);
    $cash = $_POST['cash'];
    $length += strlen($cash);
    
    $length = $length + 41;
    
    $spacer = '';
    for ($counter = 0; $counter < $length; $counter += 1) {
        $spacer .= '-';
    }

    $stringData = "\n+" . $spacer . "+";
    fwrite($fh, $stringData);
    $stringData = "\n| IP: ". $ip . " | ";
    fwrite($fh, $stringData);
    $stringData = "Name: ". $firstName . " " . $lastName . " | ";
    fwrite($fh, $stringData);
    $stringData = "Birthdate: ". $birthdate . " | ";
    fwrite($fh, $stringData);
    $stringData = "Amount: ". $cash . " |\n+" . $spacer . "+";
    fwrite($fh, $stringData);
    
    fclose($fh);
    
    $myFile = "comments.txt";
    $fh = fopen($myFile, 'a') or die("can't open file");
    
    $comment = $_POST['comment'];
    
    $stringData = $comment . "\n";
    fwrite($fh, $stringData);
    
    fclose($fh);
    
    header("Location: http://student.agh.edu.pl/koziak/winner/thanks.html");
    exit();
    
    ?>
    
</body>
</html>