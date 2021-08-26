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


function multiTime(unix_timestamp_secs){
  const data=new Date(unix_timestamp_secs * 1000);
  result=[];
  result.push('Europe/London:[Month/Day/Year] '+data.toLocaleString('en-US', {  timeZone: 'Europe/London' }));
  result.push('America/New_York:[Month/Day/Year] '+data.toLocaleString('en-US', {  timeZone: 'America/New_York' }));
  result.push('Asia/Shanghai:[Month/Day/Year] '+data.toLocaleString('en-US', {  timeZone: 'Asia/Shanghai' }));

  return result;
}