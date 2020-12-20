var styleName = 'pink';

function myFunc(){ 
  if (document.body.id=='pink') {
    document.body.id = 'dark';
  }else{
    document.body.id ='pink';
  }
  styleName = document.body.id;
  sessionStorage.setItem('styleName', styleName);
}

function ready(){
  document.body.id=styleName;
  //alert('ready finish');
}

