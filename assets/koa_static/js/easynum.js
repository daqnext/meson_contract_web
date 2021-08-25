function easyread(fullnumber_txt_){
    result={};
    let fullnumber_txt=fullnumber_txt_.trim();
    if(fullnumber_txt.length==0){
      result.prefix='0';
      result.suffix='000000000000000000';
      result.output=result.prefix+'.'+result.suffix;
      return result;
    }

    if(fullnumber_txt.length>=19){
        result.suffix=fullnumber_txt.substring(fullnumber_txt.length-18);
        result.prefix=fullnumber_txt.substring(0,fullnumber_txt.length-18);
        result.output=result.prefix+'.'+result.suffix;
    }else{
      result.prefix='0';
      result.suffix='000000000000000000';
      result.suffix=result.suffix.substring(0,18-fullnumber_txt.length)+fullnumber_txt;
      result.output=result.prefix+'.'+result.suffix;
    }
    return result;
}