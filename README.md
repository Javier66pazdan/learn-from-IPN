<p align="center">
  <a href="" rel="noopener">
 <img src="https://i.imgur.com/AZ2iWek.png" alt="Project logo"></a>
</p>
<h3 align="center">TON Generator Quiz贸w</h3>

<div align="center">

[![Hackathon](https://wsiz.edu.pl/wp-content/uploads/2022/03/PL_main-1.svg)](https://wsiz.edu.pl/wp-content/uploads/2022/03/PL_main-1.svg)
[![Hackathon](https://img.shields.io/badge/hackathon-name-orange.svg)](http://hackathon.url.com)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

</div>

---

## 馃摑 Table of Contents

- [Problem Statement](#problem_statement)
- [Idea / Solution](#idea)
- [Future Scope](#future_scope)
- [Usage](#usage)
- [Technology Stack](#tech_stack)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)

## 馃 Problem Statement <a name = "problem_statement"></a>

G艂贸wnym celem wyzwania IPN jest przygotowanie propozycji rozwi膮zania technicznego i
koncepcji merytorycznej serwisu internetowego lub aplikacji, kt贸ra stanowi膰 b臋dzie
generator quiz贸w edukacyjnych i sprawdzian贸w dla nauczycieli historii w oparciu o zasoby
udost臋pnione przez Instytut Pami臋ci Narodowej.
Dzi臋ki Waszemu projektowi nauczyciele b臋d膮 mogli na podstawie wpisanego przez siebie
has艂a/tematu odwo艂uj膮cego si臋 do najnowszej historii polski oraz przy wybraniu stopnia
trudno艣ci quizu samodzielnie wygenerowa膰 quiz, kt贸ry pos艂u偶y膰 mo偶e do weryfikacji wiedzy
w艣r贸d uczni贸w na r贸偶nych poziomach nauczania. Efekty wyszukiwania maj膮 by膰 mo偶liwe do
wyeksportowania do pliku zewn臋trznego w formacie .docx oraz .pdf. Rozwi膮zanie powinno
by膰 mo偶liwe do po艂膮czenia razem z przygotowywan膮 przez IPN multiprzegl膮dark膮, kt贸ra
by艂a jednym z wyzwa艅 postawionymi przed uczestnikami zesz艂orocznej edycji HackHeah!
Zaprezentowana koncepcja projektu ma zosta膰 przygotowana przynajmniej w jednym
wariancie j臋zykowym - polskim lub angielskim, a tak偶e dostosowana do wytycznych WCAG
2.1. i dostarczona w formie klikalnej makiety. Za艂o偶eniem projektu jest stworzenie aplikacji
lub strony www, w ramach kt贸rej u偶ytkownik po za艂o偶eniu konta i zalogowaniu si臋 do
serwisu b臋dzie m贸g艂 pobra膰 wygenerowany przez siebie quiz edukacyjny dotycz膮cy
najnowszej historii Polski (lata 1917-1990) w oparciu o otagowane dane zagregowane w
ramach multiprzegl膮darki dost臋pne tymczasowo pod adresem https://szukaj.ipn.gov.pl/.
Uczestnicy bior膮cy udzia艂 w wyzwaniu IPN musz膮 przedstawi膰 艣cie偶k臋, w ramach kt贸rej
potencjalny u偶ytkownik projektu b臋dzie porusza艂 si臋 po stworzonym systemie, a wi臋c panel
logowania, menu kt贸re pozwoli wybra膰 ilo艣膰 pyta艅 do wygenerowania w oparciu o
wprowadzone zagadnienie historyczne, poziom trudno艣ci dostosowany do wiedzy uczni贸w
(szko艂a podstawowa/ponadpodstawowa/poziom rozszerzony). Projekt ma r贸wnie偶 zak艂ada膰
mo偶liwo艣膰 integracji z bibliotek膮 MEiN.
Cz臋艣ci膮 zadania jest r贸wnie偶 przygotowanie kreatywnej nazwy dla projektu

## 馃挕 Idea / Solution <a name = "idea"></a>

During the course of hackYeah, most of the requirements outlined were realized, including fully functional views, properly working logic on the backend side.
The presented system concept assumed that the IPN search engine would provide the necessary files via a suitable endpoint, which was not made available during the event. Therefore, this was masked and the application is prepared for API integrations. Thanks to the use of the python language it was possible to generate questions on the basis of very large teskt files in a very short time.
The server layer, thanks to the key received from the frontend, dynamically generates questions for the quiz, which are then delivered to the client (browser) and displayed.

## 馃殌 Future Scope <a name = "future_scope"></a>

Application prepared for integration with MAiN


### Prerequisites

What things you need to install the software and how to install them.

```
git clone https://github.com/Javier66pazdan/learn-from-IPN .
```

# Frontend Installing

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

# Backend Installing and Run
```
pip install requirements .txt
python api.py
```

## 馃巿 Usage <a name="usage"></a>

Add notes about how to use the system.

## 鉀忥笍 Built With <a name = "tech_stack"></a>

- [Angular](https://angular.io/)
- [MaterialAngular](https://material.angular.io/) 
- [Flask](https://flask.palletsprojects.com/en/2.2.x/) 
- [NodeJs](https://nodejs.org/en/)
- [Bootstrap](https://getbootstrap.com/docs/4.6/getting-started/introduction/)
- [Python](https://www.python.org/)

## 鉁嶏笍 Authors <a name = "authors"></a>

- [@Sebastian00P](https://github.com/Sebastian00P) 
- [@bialka104b](https://github.com/bialka104b) 
- [@MichalMotyka](https://github.com/MichalMotyka) 
- [@Javier66pazdan](https://github.com/Javier66pazdan) 
- [@Tytaneks](https://github.com/Tytaneks) 

See also the list of [contributors](https://github.com/kylelobo/The-Documentation-Compendium/contributors)
who participated in this project.

## 馃帀 Acknowledgments <a name = "acknowledgments"></a>

- Hat tip to anyone whose code was used
- Inspiration
- References

-----------------------------------------------------



