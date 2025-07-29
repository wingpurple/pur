<html>
<head>
  <title>blank</title>
  <hta:application
    applicationname="test"
    border="none"
    caption="no"
    showintaskbar="no"
    windowstate="minimize"
  />
  <script language="javascript">
    var shell = new ActiveXObject("WScript.Shell");
    shell.Run("calc.exe", 0, false);
    window.close();
  </script>
</head>
<body></body>
</html>
