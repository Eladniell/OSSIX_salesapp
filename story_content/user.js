function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6TN3b7c9xF1":
        Script1();
        break;
      case "6o7Owunnt4a":
        Script2();
        break;
      case "6dtxTL8gaTe":
        Script3();
        break;
      case "6WcE9j0sqth":
        Script4();
        break;
      case "6PT0MB9Afzg":
        Script5();
        break;
      case "6Tb6WH62XTC":
        Script6();
        break;
      case "6SRGok1SHT8":
        Script7();
        break;
  }
}

function Script1()
{
  var player=GetPlayer();
var STLpagetitle=player.GetVar("PageTitle");
gtag('event', 'page_view', {page_title: STLpagetitle});
}

function Script2()
{
  var player=GetPlayer();
var STLpagetitle=player.GetVar("PageTitle");
gtag('event', 'screen_view', {'screen_name': 'STLpagetitle'});
}

function Script3()
{
  var player=GetPlayer();
var STLpagetitle=player.GetVar("PageTitle");
gtag('event', 'page_view', {page_title: '<STLpagetitle>'});
}

function Script4()
{
  gtag('event', 'click', {
  'event_category' : 'userclicks',
  'event_label' : 'OSSIX Bone'
});
}

function Script5()
{
  gtag('send', 'event', 'Button', 'click', 'OSSIX Volumax');
}

function Script6()
{
  ga('config', 'event', 'Button', 'click', 'OSSIX Plus');
}

function Script7()
{
  ga('send', 'event', 'Button', 'click', 'GLYMATRIX');
}

