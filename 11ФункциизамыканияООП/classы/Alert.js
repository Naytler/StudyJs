class Alert {
    constructor(a,c,d){
        this.message = a;
        this.cssClass = c;
        this.out = d;
    }
    showAlert() {
        document.querySelector(this.out).innerHTML = `<p class='${this.cssClass}'>
        ${this.message}</p>`;
    }
}

// функция name возвращает 0 если не равно number
// если равно тогда выполняется следующее действие

// function name($number) {
//     return 0 if(!$number);
//     $number =~ s/,/./;  # s/$string1/$string2/ заменяет $string1 на $string2
//     $n=0; $r=0;
//     ($n,$r)=split('\.',$number);  # разбивает строку по разделителю
//     if($r) {
//         $r=substr($r, 0, 1);  # возвращает подстроку
//     } else {
//        $r=0;
//     }
//     $n++ if ($r>=5);
//     return $n;
// }
// Функция name