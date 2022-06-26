function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6BXbHfkn8no":
        Script1();
        break;
      case "6rIVXAMSi4N":
        Script2();
        break;
      case "6LQiR8Mgl7W":
        Script3();
        break;
      case "6bGSd8M9uTt":
        Script4();
        break;
      case "5pWIOO86rYo":
        Script5();
        break;
  }
}

function Script1()
{
  var player=GetPlayer();
var pagetitle=player.GetVar("PageTitle");
gtag('event', 'page_view', {page_title: 'PageTitle'});
gtag('config', 'page_view', {page_title: 'PageTitle'});
}

function Script2()
{
  gtag('send', 'event', 'Button', 'click', 'OSSIX Bone');
}

function Script3()
{
  gtag('send', 'event', 'Button', 'click', 'OSSIX Volumax');
}

function Script4()
{
  ga('config', 'event', 'Button', 'click', 'OSSIX Plus');
}

function Script5()
{
  ga('send', 'event', 'Button', 'click', 'GLYMATRIX');
}

