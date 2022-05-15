var words = ['Hai Widyaa. .', 
'ini riskii', 
'sebenarnya riski mau ngomong langsung sama widya', 
'tapi. .', 
'kayanya widya sibuk terus akhir - akhir ini', 
'riski ga tau emng widya nya ngehindar atau gimana', 
'tapi riski tetep berpikir positif biar ga ke pikiran kali', 
'riski sayang bngt sama widya', 
'serius.', 
'mungkin widya ga percaya,', 
'dan mikir "apa si baru juga berapa minggu uda kaya gitu aja sayangnya"', 
'kalo widya tau, riski uda suka sama widya dari', 
'3 tahun yang lalu',
'itu kenapa WA widya yang riski dapet dluan',
'dari pada 2 mantan riski sebelumnya',
'tapi riski ga bisa ngedeketin widya waktu itu',
'soalnya widya masi sama danil',
'riski pernah bales SW widya',
'waktu widya buat SW masi chatan/ deket sama mantan gitu',
'trus respon widya kayanya masi sayang sama si danil ini',
'jadi riski ga bisa berbuat banyak.',
'sampe kemarin si aldo nanya ke riski "mau sama widya ga?"',
'riski dilema,',
'bukan karena riski masi sayang sama anisa',
'bukan.',
'si aldo jg tau, tiap aldo nanya kaya gitu, pasti riski jawab',
'"si nisa kan kenal widya"',
'yaa kesalahan paling fatal riski, kenapa riski ngedeketin anisa',
'tapi di satu sisi riski pengen bngt sama widya,',
'serius.',
'trus si aldo ngechat temennya yang lain',
'nawari cewek, disitu riski langsung down',
'and besok nya riski mutusin buat ngejar widya',
'riski follow ig widya hehe',
'jadi riski bersyukur kali bisa,',
'have a crush on you',
'org yang riski suka selama 3 tahun, akhirnya bisa riski dapeti',
'mungkin widya tau gimana senangnya riski waktu itu.',
'. . .',
'itu aja si yang pengen riski bilang',
'riski cuma mau nunjuki keseriusan riski ke widya',
'riski bener - bener sayang bngt sama widya',
'FIUHH~',
'lega rasanya uda ngomong kaya gini,',
'walaupun ga secara langsung',
'dan terakhir',
'widya mau balikan sama riski kaya dulu?',
'kalo widya terima chat "YA" di WA riski',
'dan kalo nolak, chat "TIDAK" di WA riski',
'riski berharap jawaban "YA" sama keputusan widya nanti',
'tapi jawab emng dari hati widya ya,',
'tanpa paksaan, atau rasa kaisan hehe',
'. . .',
'dahh, itu aja hehe',
'diabisin ya dessert nya',
'i love u widya <3'
],
    part,
    i = 0,
    offset = 0,
    len = words.length,
    forwards = true,
    skip_count = 0,
    skip_delay = 30,
    speed = 65;
var wordflick = function () {
  setInterval(function () {
    if (forwards) {
      if (offset >= words[i].length) {
        ++skip_count;
        if (skip_count == skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    }
    else {
      if (offset == 0) {
        forwards = true;
        i++;
        offset = 0;
        if (i >= len) {
          i = 0;
        }
      }
    }
    part = words[i].substr(0, offset);
    if (skip_count == 0) {
      if (forwards) {
        offset++;
      }
      else {
        offset = 0;
      }
    }
    $('.word').text(part);
  },speed);
};

$(document).ready(function () {
  wordflick();
});
