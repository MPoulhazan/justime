# Projet Justime Nantes - ionic

## Versions :
- ionic 4

## Structure :

```
project/
├─ ionic.config.json # Ionic project config file
├─ platforms/ # contains iOS and Android projects 
├─ package.json
├─ src/
│  ├─ app/ # contains the page components for your app
│  ├─ assets/ # put your images, etc. here
│  ├─ environments/ # contains the environment variable
│  ├─ theme/
│  │  └─ variables.scss # see  https://ionicframework.com/docs/theming
│  ├─ index.html # main html file
│  └─ main.ts # bootstrap file
└─ www/ # build output directory - Ionic's 'dist' folder
```

## Prerequis :

- Gradle 4.4
- Node 10
- Ionic 4.12.0
- Ionic cli 5.2.3
- SDK android 26+ 

## Commandes :

- instal de ionic et cordova : ```npm install -g cordova ionic@4.12.0```
- install des dépendances : ```npm install```
- executer un script : ```npm run <script in package.json>```
- executer le projet en local : ```ionic serve```
- ajouter une platform (android) : ```ionic cordova platform add android```
- preparer une platform (android) : ```ionic cordova prepare android```
- build un apk : ```ionic cordova build android```
- build un apk en prod : ```ionic cordova build --prod android```


## Outils
  - Outils de génération de logo pour mobiles
  https://romannurik.github.io/AndroidAssetStudio/index.html


## Generation du keystore : 

`keytool -genkey -v -keystore app.keystore -alias upload -keyalg RSA -keysize 2048 -validity 100000`


## Signature de l'app bundle :

`jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore app.keystore {{bundle_application}}.aab upload`


## Déploiement de l'Application

Aller sur la console Google Play : https://play.google.com/apps/publish/
