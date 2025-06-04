var userName = "장태빈";
var userPW = '1111';

function account(userid, userpw)
{
  console.log(userid);
  console.log(userpw);
  var savedName = '장태빈';
  var savedPW = '1111';

  userpw = userpw || '1111';

  if(userid == savedName)
  {
    if(userpw == savedPW)
    {
      console.log('반갑습니다. ' + userid+'님');
    }
  }
}

account(userName);