var number_of_rows = 10
//Fonction pour ajouter une ligne de code dans le tableau RAID 5
function PLUS() {
    number_of_rows++
    RAID5(number_of_rows)
}
//Fonction pour supprimmer une ligne de code dans le tableau RAID 5
function MINUS() {
    number_of_rows--
    RAID5(number_of_rows)
}
// Fonction pour changer le code de l'HTML de départ pour avoir le RAID 5
function RAID5(number_of_rows) {
    var pos_somme = 5
    var alphabet_number = 1
    var text = ''
    // Premier ligne du tableau
    var table_row_min_number = 1
    // Nombre du dernier ligne // Ici on avait 10 ligne
    //var table_row_max_number = 10
    // boucle pour modifier le code dans la balisr <tbody> de notre tableau
    while (table_row_min_number < number_of_rows + 1){
        //Le nombre de l'alphabet
        //console.log("Alphabet number is:" + alphabet_number)
        //Sa lettre correspondant
        letter1 = Alphabet(alphabet_number)
        letter2 = Alphabet(alphabet_number + 1)
        letter3 = Alphabet(alphabet_number + 2)
        letter4 = Alphabet(alphabet_number + 3)
        //console.log("Alphabet est:" + letter1)
        // Retourne aux DISK 0
        if(pos_somme==6){
            pos_somme = 1
        }
        if(pos_somme == 1){
            text += '<tr>'
            text += '<td scope="row">Block '+ letter1 +' + '+ letter2 +' + '+ letter3 +' + '+ letter4 +'</td>'
            text += '<td>Block '+ letter1 +'</td>'
            text += '<td>Block '+ letter2 +'</td>'
            text += '<td>Block '+ letter3 +'</td>'
            text += '<td>Block '+ letter4 +'</td>'
            text += '</tr>'
        }
        else if (pos_somme == 2){
            text += '<tr>'
            text += '<td scope="row">Block '+ letter1 +'</td>'
            text += '<td>Block '+ letter1 +' + '+ letter2 +' + '+ letter3 +' + '+ letter4 +'</td>'
            text += '<td>Block '+ letter2 +'</td>'
            text += '<td>Block '+ letter3 +'</td>'
            text += '<td>Block '+ letter4 +'</td>'
            text += '</tr>'
        }
        else if (pos_somme == 3){
            text += '<tr>'
            text += '<td scope="row">Block '+ letter1 +'</td>'
            text += '<td>Block '+ letter2 +'</td>'
            text += '<td>Block '+ letter1 +' + '+ letter2 +' + '+ letter3 +' + '+ letter4 +'</td>'
            text += '<td>Block '+ letter3 +'</td>'
            text += '<td>Block '+ letter4 +'</td>'
            text += '</tr>'
        }
        else if (pos_somme == 4){
            text += '<tr>'
            text += '<td scope="row">Block '+ letter1 +'</td>'
            text += '<td>Block '+ letter2 +'</td>'
            text += '<td>Block '+ letter3 +'</td>'
            text += '<td>Block '+ letter1 +' + '+ letter2 +' + '+ letter3 +' + '+ letter4 +'</td>'
            text += '<td>Block '+ letter4 +'</td>'
            text += '</tr>'
        }
        else if (pos_somme == 5){
            text += '<tr>'
            text += '<td scope="row">Block '+ letter1 +'</td>'
            text += '<td>Block '+ letter2 +'</td>'
            text += '<td>Block '+ letter3 +'</td>'
            text += '<td>Block '+ letter4 +'</td>'
            text += '<td>Block '+ letter1 +' + '+ letter2 +' + '+ letter3 +' + '+ letter4 +'</td>'
            text += '</tr>'
        }

        //Incrementation
        alphabet_number = alphabet_number + 4
        pos_somme++
        table_row_min_number++
    }

    $("#tableau_raid5").html(text);
}

// Fonction pour transformer le chiffre correspondant dans l'alphabet A-Z qui comprend 26 lettres
function Alphabet(number) {
    var letter = ''
    // Pour qu'on reste tjr dans le nombre 1-26 de l'alphabet
    if(number >= 27){
        number = number % 26
    }
    switch (number) {
    case 1:
        //console.log('Lettre correspond à A')
        return letter = 'A'
        break
    case 2:
       // console.log('Lettre correspond à B')
        return letter = 'B'
        break
    case 3:
        //console.log('Lettre correspond à C')
        return letter = 'C'
        break
    case 4:
        //console.log('Lettre correspond à D')
        return letter = 'D'
        break
    case 5:
        //console.log('Lettre correspond à E')
        return letter = 'E'
        break
    case 6:
        //console.log('Lettre correspond à F')
        return letter = 'F'
        break
    case 7:
        //console.log('Lettre correspond à G')
        return letter = 'G'
        break
    case 8:
        //console.log('Lettre correspond à H')
        return letter = 'H'
        break
    case 9:
        //console.log('Lettre correspond à I')
        return letter = 'I'
        break
    case 10:
        //console.log('Lettre correspond à J')
        return letter = 'J'
        break
    case 11:
        //console.log('Lettre correspond à K')
        return letter = 'K'
        break
    case 12:
        //console.log('Lettre correspond à L')
        return letter = 'L'
        break
    case 13:
        //console.log('Lettre correspond à M')
        return letter = 'M'
        break
    case 14:
        //console.log('Lettre correspond à N')
        return letter = 'N'
        break
    case 15:
        //console.log('Lettre correspond à O')
        return letter = 'O'
        break
    case 16:
        //console.log('Lettre correspond à P')
        return letter = 'P'
        break
    case 17:
        //console.log('Lettre correspond à Q')
        return letter = 'Q'
        break
    case 18:
       // console.log('Lettre correspond à R')
        return letter = 'R'
        break
    case 19:
        //console.log('Lettre correspond à S')
        return letter = 'S'
        break
    case 20:
        //console.log('Lettre correspond à T')
        return letter = 'T'
        break
    case 21:
        //console.log('Lettre correspond à U')
        return letter = 'U'
        break
    case 22:
        //console.log('Lettre correspond à V')
        return letter = 'V'
        break
    case 23:
        //console.log('Lettre correspond à W')
        return letter = 'W'
        break
    case 24:
        //console.log('Lettre correspond à X')
        return letter = 'X'
        break
    case 25:
        //console.log('Lettre correspond à Y')
        return letter = 'Y'
        break
    case 26:
        //console.log('Lettre correspond à Z')
        return letter = 'Z'
        break
    default:
        //console.log('Nombre hors norme de l alphabet.')
        break;
    }
}