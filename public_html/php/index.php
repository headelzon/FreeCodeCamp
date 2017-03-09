<html>
<body>
    <?php
    echo file_get_html('http://www.politico.com/2016-election/results/map/president')->plaintext; 
    ?>
</body>
</html>