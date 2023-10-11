// Этап 2. Создайте массив объектов студентов.Добавьте в него объекты студентов, например 5 студентов.

// Добавьте сюда объекты студентов
const studentsList = [
    {
        name: 'Василий',
        surname: 'Васильев',
        midlename: 'Васильевич',
        date: '1974-12-20',
        dateStartStudy: 2024,
        faculty: 'Автомобили',
    },
    {
        name: 'Евгений',
        surname: 'Евгеньев',
        midlename: 'Евгеньевич',
        date: '1980-10-25',
        dateStartStudy: 2000,
        faculty: 'Мотоциклы',
    },
    {
        name: 'Иван',
        surname: 'Иванов',
        midlename: 'Иванович',
        date: '1999-5-10',
        dateStartStudy: 2015,
        faculty: 'Философии',
    },
    {
        name: 'Сергей',
        surname: 'Сергеев',
        midlename: 'Сергеевич',
        date: '1995-7-1',
        dateStartStudy: 2020,
        faculty: 'Автомобили',
    },
    {
        name: 'Александр',
        surname: 'Александров',
        midlename: 'Александрович',
        date: '1998-9-12',
        dateStartStudy: 2022,
        faculty: 'Мотоциклы',
    },
]

//Отфмльтрованный массив
let filterStudentsList=[];


// Этап 1. В HTML файле создайте верстку элементов, которые будут статичны(неизменны).
const container = document.getElementById('student-sheet');
const sheetTitle=document.createElement('h1');
//Форма фильтра
const filtrContainer=document.createElement('div');
const formFilterContainer =document.createElement('form');
const inputFilterConteiner=document.createElement('div');
const buttonFilterConteiner=document.createElement('div');
const inputFilterFIO=document.createElement('input');
const inputFilterFaculty=document.createElement('input');
const inputFilterStartData=document.createElement('input');
const inputFilterFinishdata=document.createElement('input');
const buttonFilterEnter=document.createElement('button');
const buttonFilterCancel=document.createElement('button');
//кнопка вызова формы ввода
const callEnterFormStudentWrap=document.createElement('div');
const callEnterFormStudentTitle=document.createElement('span');
const callEnterFormStudentButton=document.createElement('button');
callEnterFormStudentTitle.textContent='Введите нового студента';
callEnterFormStudentButton.textContent='+';
callEnterFormStudentWrap.classList.add('d-flex', 'justify-content-between', 'mb-3');
callEnterFormStudentButton.classList.add('btn', 'btn-primary')
callEnterFormStudentButton.type='button'
//Форма ввода
const formContainer=document.createElement('div');
//Список студентов и его заголовок
const listContainer=document.createElement('div');
const listStudentsHead=document.createElement('ul');
const listStudents=document.createElement('ul');
const itemHeadStudents=document.createElement('li');
const stringHeadStudentsFIO=document.createElement('span');
const stringHeadStudentsFaculty=document.createElement('span');
const stringHeadStudentsBithday=document.createElement('span');
const stringHeadStudentStady=document.createElement('span');
const simbolAp='▲ ';
const simbolDown='▼ ';
const simbolNot='○ ';
const contentHeadFio='Ф. И. О.';
const contentHeadFaculty='Факультет';
const contentHeadBithday='Дата рождения и возраст';
const contentHeadStady='Годы обучения';
//метка порядка сортировки
let markdir=true;
//заполение заголовков списка стедентов
sheetTitle.innerHTML='список студентов';
stringHeadStudentsFIO.textContent=simbolNot+contentHeadFio;
stringHeadStudentsFaculty.textContent=simbolNot+contentHeadFaculty;
stringHeadStudentsBithday.textContent=simbolNot+contentHeadBithday;
stringHeadStudentStady.textContent=simbolNot+contentHeadStady;
//добавление классов созданным полям
container.classList.add('container')
//formContainer.classList.add('form-row')
sheetTitle.classList.add('text-center');
listStudentsHead.classList.add('m-0')
listStudents.classList.add('m-0')
itemHeadStudents.classList.add('list-group', 'list-group-horizontal', 'd-flex', 'justify-content-between', 'w-100');
stringHeadStudentsFIO.classList.add('list-group-item', 'w-25');
stringHeadStudentsFaculty.classList.add('list-group-item', 'w-25');
stringHeadStudentsBithday.classList.add('list-group-item', 'w-25')
stringHeadStudentStady.classList.add('list-group-item', 'w-25');

//Форма ввода студентов

function createEnterStudentForm(){
    let enterStudentForm=document.createElement('form');
    let enterStudentFieldset=document.createElement('fieldset');
    let enterStudentLegend=document.createElement('legend');
    let enterStudentFormWraper=document.createElement('div');
    let inputWrapper=document.createElement('div');
    let fioWrapper = document.createElement('div');
    let dateAndFacultyWrapper = document.createElement('div');
    let buttonWrapper=document.createElement('div');

    let inputStudentName=document.createElement('input');
    let inputStudentSurname=document.createElement('input');
    let inputStudentMidlename=document.createElement('input');
    let inputStudentDate=document.createElement('input');
    let inputStudentDateStartStudy=document.createElement('input');
    let inputStudentFaculty=document.createElement('input');

    let labelStudentName=document.createElement('label');
    let labelStudentSurname=document.createElement('label');
    let labelStudentMidlename=document.createElement('label');
    let labelStudentDate=document.createElement('label');
    let labelStudentDateStartStudy=document.createElement('label');
    let labelStudentFaculty=document.createElement('label');


    let closeFormStudentButton=document.createElement('button');
    let crosscloseFormStudentSpan=document.createElement('span');
    let enterSudentButton=document.createElement('button');
    let cancelSudentButton=document.createElement('button');

    enterStudentForm.classList.add( 'mb-3', 'w-100', 'position-relative', 'd-none');
    enterStudentFormWraper.classList.add('form-row')
    //inputWrapper.classList.add('col-6');
    buttonWrapper.classList.add('col-2');
    fioWrapper.classList.add('col-5');
    dateAndFacultyWrapper.classList.add('col-5');

    enterStudentLegend.textContent='Введите данные';

    inputStudentName.classList.add('form-control');
    inputStudentName.value='Мезенцев';
    inputStudentName.placeholder='Введите имя';
    labelStudentName.classList.add('col-form-label');
    labelStudentName.textContent='Имя';
    inputStudentName.type='text';
    inputStudentName.setAttribute('id', 'idInputStudentName');
    labelStudentName.setAttribute('for', 'idInputStudentName');

    inputStudentSurname.classList.add('form-control');
    inputStudentSurname.value='Мезенцев';
    inputStudentSurname.placeholder='Введите Фамилию';
    labelStudentSurname.classList.add('col-form-label');
    labelStudentSurname.textContent='Фамилия';
    inputStudentSurname.type='text';
    inputStudentSurname.setAttribute('id', 'idInputStudentSurname');
    labelStudentSurname.setAttribute('for', 'idInputStudentSurname');

    inputStudentMidlename.classList.add('form-control');
    inputStudentMidlename.value='Мезенцев';
    inputStudentMidlename.placeholder='Введите Отчество';
    labelStudentMidlename.classList.add('col-form-label');
    labelStudentMidlename.textContent='Отчество';
    inputStudentMidlename.type='text';
    inputStudentMidlename.setAttribute('id', 'idInputStudentMidlename');
    labelStudentMidlename.setAttribute('for', 'idInputStudentMidlename');

    inputStudentDate.classList.add('form-control');
    inputStudentDate.value='2003-09-29';
    inputStudentDate.placeholder='Введите Дату рожения';
    labelStudentDate.classList.add('col-form-label');
    labelStudentDate.textContent='Дата Рождения';
    inputStudentDate.type='date';
    inputStudentDate.setAttribute('id', 'idInputStudentDate');
    labelStudentDate.setAttribute('for', 'idInputStudentDate');

    inputStudentDateStartStudy.classList.add('form-control');
    inputStudentDateStartStudy.value='2022';
    inputStudentDateStartStudy.placeholder='Введите Дату поступления';
    labelStudentDateStartStudy.classList.add('col-form-label');
    labelStudentDateStartStudy.textContent='Дата поступления';
    inputStudentDateStartStudy.type='text';
    inputStudentDateStartStudy.setAttribute('id', 'idInputStudentDateStartStudy');
    labelStudentDateStartStudy.setAttribute('for', 'idInputStudentDateStartStudy');

    inputStudentFaculty.classList.add('form-control');
    inputStudentFaculty.value='Новый';
    inputStudentFaculty.placeholder='Введите Факультет';
    labelStudentFaculty.classList.add('col-form-label');
    labelStudentFaculty.textContent='Факультет';
    inputStudentFaculty.type='text';
    inputStudentFaculty.setAttribute('id', 'idInputStudentFaculty');
    labelStudentFaculty.setAttribute('for', 'idInputStudentFaculty');

    let spanLabelError=document.createElement('span')
    spanLabelError.classList.add('text-danger');
    spanLabelError.textContent='Введите '
    //labelStudentFaculty.prepend(spanLabelError);

    closeFormStudentButton.type='button';
    enterSudentButton.type='submit';
    cancelSudentButton.type='button';
    closeFormStudentButton.classList.add('ml-2', 'mb-1', 'close', 'position-absolute')
    closeFormStudentButton.style.top=0;
    closeFormStudentButton.style.right=0;
    closeFormStudentButton.setAttribute('data-dismiss','toast')
    closeFormStudentButton.setAttribute('aria-label','Close')
    // closeFormStudentButton.setAttribute('top','0')
    // closeFormStudentButton.setAttribute('right','0')
    crosscloseFormStudentSpan.innerHTML='&times;'
    crosscloseFormStudentSpan.setAttribute('aria-hidden','true')
    enterSudentButton.classList.add('btn', 'btn-primary')
    cancelSudentButton.classList.add('btn', 'btn-danger')
    enterSudentButton.textContent='Ввод';
    cancelSudentButton.textContent='Сброс';
    

    //блокируем поле
    enterSudentButton.disabled = false;
    //разблокируем кнопку если поле не пустое

    //событие закрытия формы ввода студента
    closeFormStudentButton.addEventListener('click', function(){
        enterStudentForm.classList.add('d-none')
        callEnterFormStudentWrap.classList.remove('invisible')
    })

    callEnterFormStudentButton.addEventListener('click', function(){
        enterStudentForm.classList.remove('d-none')
        callEnterFormStudentWrap.classList.add('invisible')
    })

    //событие вввода в дату поступления

    

    //событие ввода студента
    enterStudentForm.addEventListener('submit', function(e){
        e.preventDefault();
        let inputStudentNameValue = inputStudentName.value;
        let inputStudentSurnameValue=inputStudentSurname.value;
        let inputStudentMidlenameValue=inputStudentMidlename.value;
        let inputStudentDateValue=inputStudentDate.value;
        let inputStudentDateStartStudyValue=Number(inputStudentDateStartStudy.value);
        let inputStudentFacultyValue=inputStudentFaculty.value;
        
       let indexStudentName = checkInputTextEnterForm(inputStudentName, labelStudentName);
       let indexStudentSurname= checkInputTextEnterForm(inputStudentSurname, labelStudentSurname);
       let indexStudentMidlename=  checkInputTextEnterForm(inputStudentMidlename, labelStudentMidlename);
       let indexStudentFaculty=  checkInputTextEnterForm(inputStudentFaculty, labelStudentFaculty);
       let indexStudentDate=  checkInputTextEnterForm(inputStudentDate, labelStudentDate);
       
       
       let indexStudentDateStartStudy=  checkInputTextEnterForm(inputStudentDateStartStudy, labelStudentDateStartStudy);
       console.log('indexStudentDate', indexStudentDateStartStudy, 'summ', indexStudentName+indexStudentSurname+indexStudentMidlename+indexStudentFaculty+indexStudentDate+indexStudentDateStartStudy)
         
       let objNewStudent=[{
           name: inputStudentNameValue,
           surname: inputStudentSurnameValue,
           midlename: inputStudentMidlenameValue,
           date: inputStudentDateValue,
           dateStartStudy: inputStudentDateStartStudyValue,
           faculty: inputStudentFacultyValue,
        }];

        if(indexStudentName+indexStudentSurname+indexStudentMidlename+indexStudentFaculty+indexStudentDate+indexStudentDateStartStudy==6){
            // let localDataStudent =localStorage.getItem('Students');
            // listArray=JSON.parse(localDataStudent);
            listArray=getItemlocalDataArrStudent()
            listArray.push(objNewStudent[0]) 
        saveList(listArray);
        filterStudentsList=listArray;
        renderStudentsTable();
          //clearFormData();
         inputStudentName.value='';
         inputStudentSurname.value='';
        inputStudentMidlename.value='';
        inputStudentDate.value='';
        inputStudentDateStartStudy.value='';
        inputStudentFaculty.value='';
        } else{
            return;
        }
    })
    //событие очистки полей формы ввода студента
    cancelSudentButton.addEventListener('click', function(){
        inputStudentName.value='';
         inputStudentSurname.value='';
        inputStudentMidlename.value='';
        inputStudentDate.value='';
        inputStudentDateStartStudy.value='';
        inputStudentFaculty.value='';
    })

//     inputStudentDateStartStudy.addEventListener('input', function(){
//         console.log('lfflfl')
//     })

//     inputStudentDateStartStudy.addEventListener('key', function() {
//         console.log('248',)
// 	// Разрешаем: backspace, delete, tab и escape
// 	if ( event.key == 46 || event.key == 8 || event.key == 9 || event.key == 27 ||
// 		// Разрешаем: Ctrl+A
// 		(event.key == 65 && event.ctrlKey === true) ||
// 		// Разрешаем: home, end, влево, вправо
// 		(event.key >= 35 && event.key <= 39)) {
		
// 		// Ничего не делаем
// 		return;
// 	} else {
// 		// Запрещаем все, кроме цифр на основной клавиатуре, а так же Num-клавиатуре
// 		if ((event.key < 48 || event.key > 57) && (event.key < 96 || event.key > 105 )) {
// 			event.preventDefault();
// 		}
// 	}
// });


//ДОРАБОТАТЬ
// inputStudentName.addEventListener('input', function () {
//         if (inputStudentName.value.trim() !== '') {//trim убираеть пробелы
//             enterSudentButton.disabled = false;
//         }
//     })

//добавляем объеты в контейнеры
    fioWrapper.append(
        labelStudentSurname, inputStudentSurname,
        labelStudentName, inputStudentName,
        labelStudentMidlename, inputStudentMidlename 
        );
    dateAndFacultyWrapper.append(
        labelStudentDate, inputStudentDate, 
        labelStudentDateStartStudy, inputStudentDateStartStudy, 
        labelStudentFaculty, inputStudentFaculty
        );
    //inputWrapper.append(fioWrapper, dateAndFacultyWrapper);
    closeFormStudentButton.append(crosscloseFormStudentSpan)
    buttonWrapper.append(enterSudentButton, cancelSudentButton);
    enterStudentFormWraper.append(fioWrapper, dateAndFacultyWrapper, buttonWrapper)
    enterStudentFieldset.append(enterStudentLegend, enterStudentFormWraper)
    enterStudentForm.append(enterStudentFieldset, closeFormStudentButton);
    //возвращаем данные формы ввода струдента
    return {
        closeFormStudentButton,
        enterStudentForm,
        inputStudentName,
        inputStudentSurname,
        inputStudentMidlename,
        inputStudentDate,
        inputStudentDateStartStudy,
        inputStudentFaculty,
        inputWrapper,
        buttonWrapper,
    }
}

let enterForm = createEnterStudentForm().enterStudentForm
let closeFormStudentButton = createEnterStudentForm().closeFormStudentButton
getFormFilter()
formContainer.append(enterForm);
//itemContainer.append()
callEnterFormStudentWrap.append(callEnterFormStudentTitle, callEnterFormStudentButton);
itemHeadStudents.append(stringHeadStudentsFIO, stringHeadStudentsFaculty, stringHeadStudentsBithday, stringHeadStudentStady)
listStudentsHead.append(itemHeadStudents);
listContainer.append(listStudentsHead,  listStudents)

container.append(sheetTitle,callEnterFormStudentWrap, formContainer,  filtrContainer, listContainer);





// Этап 3. Создайте функцию вывода одного студента в таблицу, по аналогии с тем, как вы делали вывод одного дела в модуле 8. Функция должна вернуть html элемент с информацией и пользователе.У функции должен быть один аргумент - объект студента.
function getStudentItem(studentObj=studentsList[0]) {
    
    let nameStudentObg=studentObj.name;
    let surnameStdentObj=studentObj.surname;
    let midlenameStudentObj=studentObj.midlename;
    let dateStudentObj=studentObj.date;
    let dateStartStudyStudentObj=studentObj.dateStartStudy;
    // ФИО
    let fioStudentObj=surnameStdentObj + ' '+ nameStudentObg+' '+midlenameStudentObj;
    //Факультет
    let facultyStudentObj=studentObj.faculty;
    // дата рождения и возраст
    
    let dateBirthdayAndOld=calculate_age(new Date(dateStudentObj));
    //дата поступления и курс
    
    let courseStudy =calculate_course(dateStartStudyStudentObj);
    
    let itemSinglStudents=document.createElement('li');
    let stringSingleStudentsFIO=document.createElement('span');
    let stringSingleStudentsFaculty=document.createElement('span');
    let stringSingleStudentsBithday=document.createElement('span');
    let stringSingleStudentStady=document.createElement('span');

    stringSingleStudentsFIO.textContent=fioStudentObj;
    stringSingleStudentsFaculty.textContent=facultyStudentObj;
    stringSingleStudentsBithday.textContent=dateBirthdayAndOld;
    stringSingleStudentStady.textContent=courseStudy;

    itemSinglStudents.classList.add('list-group', 'list-group-horizontal', 'd-flex', 'justify-content-between');
    stringSingleStudentsFIO.classList.add('list-group-item', 'w-25');
    stringSingleStudentsFaculty.classList.add('list-group-item', 'w-25');
    stringSingleStudentsBithday.classList.add('list-group-item', 'w-25')
    stringSingleStudentStady.classList.add('list-group-item', 'w-25');

    itemSinglStudents.append(stringSingleStudentsFIO, stringSingleStudentsFaculty, stringSingleStudentsBithday, stringSingleStudentStady);
    listStudents.append(itemSinglStudents)
    //container.append(itemSinglStudents);

    
}


// Этап 4. Создайте функцию отрисовки всех студентов. Аргументом функции будет массив студентов.Функция должна использовать ранее созданную функцию создания одной записи для студента.Цикл поможет вам создать список студентов.Каждый раз при изменении списка студента вы будете вызывать эту функцию для отрисовки таблицы.

function renderStudentsTable(arr=filterStudentsList) {
    // filterStudentsList
    // let listArray=[]
    listStudents.innerHTML=''
    // if (arr == undefined){
    //     let arr =localStorage.getItem('Students');
    //     if (arr==null || arr==''){
    //         saveList(studentsList)
    //         arr =localStorage.getItem('Students');
    //     }
    //     listArray=JSON.parse(arr);
    // } else {listArray=arr;}
    console.log('filterStudentsList', filterStudentsList)
    for (let objStudent of arr){
        getStudentItem(objStudent)
    }
   

}



// Этап 5. К форме добавления студента добавьте слушатель события отправки формы, в котором будет проверка введенных данных.Если проверка пройдет успешно, добавляйте объект с данными студентов в массив студентов и запустите функцию отрисовки таблицы студентов, созданную на этапе 4.


// Этап 5. Создайте функцию сортировки массива студентов и добавьте события кликов на соответствующие колонки.

// Этап 6. Создайте функцию фильтрации массива студентов и добавьте события для элементов формы.

// !!! Функция вычисления даты рождения
function calculate_age(dob) {
    let diff_ms = Date.now() - dob.getTime();
    let age_dt = new Date(diff_ms);
    let dateBrthdayDay =dob.getDate();
    let dateBrthdayMonth =dob.getMonth()+1;
    let dateBrthdayYea =dob.getFullYear();
    //для правлиьного написания месяца и даты 01.02.2022 а не 1.2.2022
    dateBrthdayDay= dateBrthdayDay < 10 ? '0' + dateBrthdayDay:dateBrthdayDay;
    dateBrthdayMonth= dateBrthdayMonth < 10 ? '0' + dateBrthdayMonth:dateBrthdayMonth;


    let dateBrthday=dateBrthdayDay+'.'+dateBrthdayMonth+'.'+dateBrthdayYea;
    let dateOld=Math.abs(age_dt.getUTCFullYear() - 1970);
    return dateBrthday+ ' ('+ dateOld + ')';
}

//!!! Функция вычисления гг обучения и курс
function calculate_course(startStady){
    let course;
    let finalStady=startStady+4;
    let intervalStadyStudent = String(startStady) + '-' + String(finalStady);
    if (finalStady<new Date().getFullYear()+1 || finalStady<new Date().getFullYear()&& (new Date().getMonth()+1)>=9){
        course=intervalStadyStudent+' (Окончил)'
    } else if (startStady>=new Date().getFullYear()) {
        course='Не поступал'
    } else {
        course=intervalStadyStudent+ ' (' +(new Date().getFullYear()-startStady+1) + ' курс)';
        }
    return course;
}

//Функция проверки на заполнение текстовых полей формы ввода стедента

function checkInputTextEnterForm(input, label){
    // console.log('input.value', input.id)
    // console.log('2023>year>2000', new Date().getFullYear() >Number(input.value), Number(input.value)>2000,(new Date().getFullYear() > Number(input.value) && Number(input.value) > 2000))
    // console.log('год и буквы', (new Date().getFullYear() >Number(input.value)>2000 || isNaN(Number(input.value))))
    // console.log('буквы', isNaN(Number(input.value)))
    //label.children.remove()
    if (label.childNodes.length>1){
        label.childNodes[0].remove()
        label.classList.remove('text-danger');
    }
    let spanLabelError=document.createElement('span')
    spanLabelError.classList.add('text-danger');
    spanLabelError.textContent='Заполните '
    spanLabelError.remove();
    // spanLabelError.remove();
    if (input.value.trim()==''){
        label.classList.add('text-danger');
        label.prepend(spanLabelError);
                //label.textContent='Введите '+`${label.textContent}`;
        return x=0;
    }
    // else if(input.id =='idInputStudentDateStartStudy' && !((new Date().getFullYear() > Number(input.value) && Number(input.value) > 2000) || isNaN(Number(input.value)))){
    else if(input.id =='idInputStudentDateStartStudy'){
        console.log('год',Number(input.value))
        if (isNaN(Number(input.value))){
            label.classList.add('text-danger');
            console.log('Это не число в')
            spanLabelError.textContent='Это не число в '
            label.prepend(spanLabelError);
            return x=0;
        } else if(!(new Date().getFullYear() >= Number(input.value) && Number(input.value) >= 2000)){
            console.log('не вдиапазоне 2000-се')
            label.classList.add('text-danger');
            spanLabelError.textContent=' от 2000 до '+ new Date().getFullYear() +' ' ;
            label.prepend(spanLabelError);
            return x=0;
        }
        return x=1;
        // label.prepend(spanLabelError);
        // return x=0;
    }    
     else {
        console.log(input.id)
        return x=1;
    }
}

//Функция сброса данных формы
// пока не функциональна
function clearFormData(){
    inputStudentName.value='';
         inputStudentSurname.value='';
        inputStudentMidlename.value='';
        inputStudentDate.value='';
        inputStudentDateStartStudy.value='';
        inputStudentFaculty.value='';
}

//функция сохранения списка в хранилище
function saveList(arr, keyName='Students'){
    
    localStorage.setItem(keyName, JSON.stringify(arr));
}


//Функция сортировки

function sortUsers(arr, prop,  dir = false, propTwo, propThree){
let result = arr.sort(function(a,b){

    let dirIf = -1;
    if(dir == true) {
        dirIf = 1
    };
    if (a[prop] > b[prop])  return dirIf;
    if (a[prop] < b[prop]) return -dirIf;
    if (a[prop] == b[prop]){

        if (a[propTwo] > b[propTwo])  return dirIf;
        if (a[propTwo] < b[propTwo]) return -dirIf;
        if (a[propTwo] == b[propTwo]){
            if (a[propThree] > b[propThree])  return dirIf;
            if (a[propThree] < b[propThree]) return -dirIf;
            if (a[propThree] == b[propThree]) return -1;
         } 
    }
    
});
    return result;
}

//функция получения и возврата отсортированного массива
function getAndSetSortUsers(prop, propTwo, propThree){
    markdir=!markdir;
    // let sringFromLocalstorage =localStorage.getItem('Students');
    // let arrFromLocalstorage=JSON.parse(sringFromLocalstorage);

    //arrFromLocalstorage=getItemlocalDataArrStudent()
    filterStudentsList = sortUsers(filterStudentsList, prop, markdir, propTwo, propThree);
    renderStudentsTable();
   
   // saveList(sortArr);
    // return markdir;
    //renderStudentsTable()
}

// активизация заголовков таблицы для сортировки

//ФИО stringHeadStudentsFIO

stringHeadStudentsFIO.addEventListener('click', function(){
    getAndSetSortUsers('surname', 'name', 'midlename');
        addSimbolSortInHeadTable(stringHeadStudentsFIO, 'Ф.И.О.')
        // renderStudentsTable();
    })

//Факультет
stringHeadStudentsFaculty.addEventListener('click', function(){
    getAndSetSortUsers('faculty');
    addSimbolSortInHeadTable(stringHeadStudentsFaculty, 'Факультет')
    // renderStudentsTable();
})
//дата рождения
stringHeadStudentsBithday.addEventListener('click', function(){
    getAndSetSortUsers('date')
    addSimbolSortInHeadTable(stringHeadStudentsBithday, 'Дата рождения и возраст')
    // renderStudentsTable()
})
//год поступления
stringHeadStudentStady.addEventListener('click', function(){
    getAndSetSortUsers('dateStartStudy');
    addSimbolSortInHeadTable(stringHeadStudentStady, 'Годы обучения')
    // renderStudentsTable()
})


//функция добавления стрлки в заголовки таблицы при сортировке
function addSimbolSortInHeadTable(stringHeadName, stringHeadContent, simbol){
    if(simbol!=undefined){
        if(stringHeadName!=stringHeadStudentsFIO) stringHeadStudentsFIO.textContent=simbolNot+contentHeadFio;
        if(stringHeadName!=stringHeadStudentsFaculty) stringHeadStudentsFaculty.textContent=simbolNot+contentHeadFaculty;
        if(stringHeadName!=stringHeadStudentsBithday) stringHeadStudentsBithday.textContent=simbolNot+contentHeadBithday;
        if(stringHeadName!=stringHeadStudentStady) stringHeadStudentStady.textContent=simbolNot+contentHeadStady;
    } else{
        if(markdir==true){
            stringHeadName.textContent=simbolAp + stringHeadContent;
        } else {
            stringHeadName.textContent=simbolDown+stringHeadContent;
    
        }
    }
    
    
}

//функция создания формы фильтра
function getFormFilter(){
    
    
   // formContainer.classList
    formFilterContainer.classList.add('mb-3', 'w-100', 'form-row' );
    inputFilterConteiner.classList.add('form-row', 'm-0', 'inputFilterConteiner', 'col-10' );
    buttonFilterConteiner.classList.add('form-row', 'col-2', 'ml-auto')

    inputFilterFIO.classList.add('form-control', 'col-4');
    inputFilterFIO.placeholder='Фильтр ФИО';
    inputFilterFIO.type='text';
    inputFilterFIO.setAttribute('id', 'idInputFiltrFIO')
    inputFilterFaculty.classList.add('form-control', 'col-4');
    inputFilterFaculty.placeholder='Фильтр Факультет';
    inputFilterFaculty.type='text';
    inputFilterFaculty.setAttribute('id', 'idInputFiltrFaculty')
    inputFilterStartData.classList.add('form-control', 'col-2');
    inputFilterStartData.placeholder='дата постуления';
    inputFilterStartData.type='text';
    inputFilterStartData.setAttribute('id', 'idInputFiltrStartData')
    inputFilterFinishdata.classList.add('form-control', 'col-2');
    inputFilterFinishdata.placeholder='дата окончания'
    inputFilterFinishdata.type='text';
    inputFilterFinishdata.setAttribute('id', 'idInputFiltrFinishdata')

    buttonFilterEnter.type='submit';
    buttonFilterCancel.type='button';
    buttonFilterEnter.classList.add('btn', 'btn-primary')
    buttonFilterCancel.classList.add('btn', 'btn-danger')
    buttonFilterEnter.textContent='Фильтр';
    buttonFilterCancel.textContent='Сброс';

    inputFilterConteiner.append(inputFilterFIO, inputFilterFaculty, inputFilterStartData, inputFilterFinishdata)
    buttonFilterConteiner.append(buttonFilterEnter, buttonFilterCancel);
    formFilterContainer.append(inputFilterConteiner, buttonFilterConteiner);
    filtrContainer.append(formFilterContainer)


    //container.prepend(formFilterContainer)
}


//Фильтрация

function filter(arr, prop, value) {
    let result = [],
        copy =[...arr];
        for (const item of copy){
            
            if (prop=='faculty'){
                if (String(item[prop]).includes(value)==true) {
                    result.push(item)
                } 
            }else if(prop=='dateStartStudy'){
                if (String(item[prop])==value) {
                    result.push(item)
                } 
            }
            
            else {
                    if (String(item[prop]).includes(value)==true || String(item['name']).includes(value)==true || String(item['midlename']).includes(value)==true ) {
                        result.push(item)
                    }
                }
        }
    return result;
}

//обработка и запуск открисовки отфильтрованного массива
function render(){

   // const list = document.querySelector('.users-list');
    listStudents.innerHTML=''
    // let arrLocal =localStorage.getItem('Students');
    // arr=JSON.parse(arrLocal);
    arr=getItemlocalDataArrStudent();
          let newArr=[...arr];
          if (inputFilterFIO.value!=='') filterStudentsList  = filter(filterStudentsList, 'surname', inputFilterFIO.value);
          if (inputFilterFaculty.value!=='') filterStudentsList  = filter(filterStudentsList, 'faculty', inputFilterFaculty.value);
          if (inputFilterStartData.value!=='') filterStudentsList  = filter(filterStudentsList, 'dateStartStudy', inputFilterStartData.value);
          if (inputFilterFinishdata.value!=='') filterStudentsList  = filter(filterStudentsList, 'dateStartStudy', String(Number(inputFilterFinishdata.value)-4));
         console.log(filterStudentsList)
          //filterStudentsList=newArr;
          renderStudentsTable()
          return newArr;
}

//функция события формы фильтра
buttonFilterEnter.disabled=true;
formFilterContainer.addEventListener('submit', function(ev){
    ev.preventDefault();
    if (inputFilterFIO.value!=='' ||inputFilterFaculty.value!==''||inputFilterStartData.value!==''|| inputFilterFinishdata.value!=='') {
        console.log('фильтр не пустой')
    } else {
        console.log('фильтр пустой')
    }
    render()
})

//события активация кнопки фильтр 

inputFilterFIO.addEventListener('input', function(){
    buttonFilterEnter.disabled=false;
});
inputFilterFaculty.addEventListener('input', function(){
    buttonFilterEnter.disabled=false;
});
inputFilterStartData.addEventListener('input', function(){
    buttonFilterEnter.disabled=false;
});
inputFilterFinishdata.addEventListener('input', function(){
    buttonFilterEnter.disabled=false;
});

//function activateButtonFilterEnter()

//события кнопки сброс в форме фильтар

buttonFilterCancel.addEventListener('click', function(){
    inputFilterFIO.value='';
    inputFilterFaculty.value='';
    inputFilterStartData.value='';
    inputFilterFinishdata.value='';
    buttonFilterEnter.disabled=true;
    //let arr=undefined;
    addSimbolSortInHeadTable(stringHeadName=0, stringHeadContent=0, simbol=1)
    getItemlocalDataArrStudent();
})

//функция получения даннх из хранилища
function getItemlocalDataArrStudent(){
    let localList =localStorage.getItem('Students');
    if (localList==null || localList==''){
        saveList(studentsList)
        localList =localStorage.getItem('Students');
    }
    filterStudentsList=JSON.parse(localList);
    renderStudentsTable()
            return JSON.parse(localList);
}

getItemlocalDataArrStudent()