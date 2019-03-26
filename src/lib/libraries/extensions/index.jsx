import React from 'react';
import {FormattedMessage} from 'react-intl';

import musicImage              from './music.png';
import musicInsetImage         from './music-small.svg';
import penImage                from './pen.png';
import penInsetImage           from './pen-small.svg';
import videoImage              from './video-sensing.png';
import videoInsetImage         from './video-sensing-small.svg';
import translateImage          from './translate.png';
import translateInsetImage     from './translate-small.png';
import microbitImage           from './microbit.png';
import ev3Image                from './ev3.png';
import wedoImage               from './wedo.png';
import text2speechImage        from './text2speech.png';
import text2speechInsetImage   from './text2speech-small.svg';
import makeymakeyImage         from './makeymakey.png';
import makeymakeyInsetImage    from './makeymakey-small.svg';
import speech2TextImage        from './speech.png'
import ruloImage               from './rulo.png';
import turtlebotImage          from './turtlebot.png';
import tfVideoSensingImage     from './tfjs.png';
import iftttImage              from './ifttt.png';
import newblocksImage from './newblocks.png'// 新しい拡張機能の画像をインポート
import newblocksInsetImage from './newblocks-small.png' // 新しい拡張機能のアイコンをインポート

import microbitPeripheralImage from './peripheral-connection/microbit/microbit-illustration.svg';
import microbitMenuImage       from './peripheral-connection/microbit/microbit-small.svg';
import ev3PeripheralImage      from './peripheral-connection/ev3/ev3-hub-illustration.svg';
import ev3MenuImage            from './peripheral-connection/ev3/ev3-small.svg';
import wedoPeripheralImage     from './peripheral-connection/wedo/wedo-illustration.svg';
import wedoMenuImage           from './peripheral-connection/wedo/wedo-small.svg';
import wedoButtonImage         from './peripheral-connection/wedo/wedo-button-illustration.svg';
import rosPeripheralImage      from './peripheral-connection/ros/ros-illustration.svg';
import rosMenuImage            from './peripheral-connection/ros/ros-small.svg';
import ruloMenuImage           from './peripheral-connection/rulo/rulo.svg';
import turtlebotMenuImage      from './peripheral-connection/turtlebot/turtlebot.svg';
import iftttMenuImage          from './peripheral-connection/ifttt/ifttt.svg';

export default [
    {
        name: (
            <FormattedMessage
                defaultMessage="Music"
                description="Name for the 'Music' extension"
                id="gui.extension.music.name"
            />
        ),
        extensionId: 'music',
        iconURL: musicImage,
        insetIconURL: musicInsetImage,
        description: (
            <FormattedMessage
                defaultMessage="Play instruments and drums."
                description="Description for the 'Music' extension"
                id="gui.extension.music.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Pen"
                description="Name for the 'Pen' extension"
                id="gui.extension.pen.name"
            />
        ),
        extensionId: 'pen',
        iconURL: penImage,
        insetIconURL: penInsetImage,
        description: (
            <FormattedMessage
                defaultMessage="Draw with your sprites."
                description="Description for the 'Pen' extension"
                id="gui.extension.pen.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Video Sensing"
                description="Name for the 'Video Sensing' extension"
                id="gui.extension.videosensing.name"
            />
        ),
        extensionId: 'videoSensing',
        iconURL: videoImage,
        insetIconURL: videoInsetImage,
        description: (
            <FormattedMessage
                defaultMessage="Sense motion with the camera."
                description="Description for the 'Video Sensing' extension"
                id="gui.extension.videosensing.description"
            />
        ),
        featured: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Text to Speech"
                description="Name for the Text to Speech extension"
                id="gui.extension.text2speech.name"
            />
        ),
        extensionId: 'text2speech',
        collaborator: 'Amazon Web Services',
        iconURL: text2speechImage,
        insetIconURL: text2speechInsetImage,
        description: (
            <FormattedMessage
                defaultMessage="Make your projects talk."
                description="Description for the Text to speech extension"
                id="gui.extension.text2speech.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Speech to Text"
                description="Name for the Text to Speech extension"
                id="gui.extension.speech2text.name"
            />
        ),
        extensionId: 'speech2text',
        iconURL: speech2TextImage,
        description: (
            <FormattedMessage
                defaultMessage="Make your projects talk."
                description="Description for the Text to speech extension"
                id="gui.extension.speech2text.description"
            />
        ),
        featured: true,
        disabled: true,
    },
    {
        name: (
            <FormattedMessage
                defaultMessage="Translate"
                description="Name for the Translate extension"
                id="gui.extension.translate.name"
            />
        ),
        extensionId: 'translate',
        collaborator: 'Google',
        iconURL: translateImage,
        insetIconURL: translateInsetImage,
        description: (
            <FormattedMessage
                defaultMessage="Translate text into many languages."
                description="Description for the Translate extension"
                id="gui.extension.translate.description"
            />
        ),
        featured: true,
        internetConnectionRequired: true
    },
    {
        name: 'Makey Makey',
        extensionId: 'makeymakey',
        collaborator: 'JoyLabz',
        iconURL: makeymakeyImage,
        insetIconURL: makeymakeyInsetImage,
        description: (
            <FormattedMessage
                defaultMessage="Make anything into a key."
                description="Description for the 'Makey Makey' extension"
                id="gui.extension.makeymakey.description"
            />
        ),
        featured: true
    },
    {
        name: 'micro:bit',
        extensionId: 'microbit',
        collaborator: 'micro:bit',
        iconURL: microbitImage,
        insetIconURL: microbitMenuImage,
        description: (
            <FormattedMessage
                defaultMessage="Connect your projects with the world."
                description="Description for the 'micro:bit' extension"
                id="gui.extension.microbit.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        peripheralImage: microbitPeripheralImage,
        smallPeripheralImage: microbitMenuImage,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their micro:bit."
                id="gui.extension.microbit.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/microbit'
    },
    {
        name: 'LEGO MINDSTORMS EV3',
        extensionId: 'ev3',
        collaborator: 'LEGO',
        iconURL: ev3Image,
        insetIconURL: ev3MenuImage,
        description: (
            <FormattedMessage
                defaultMessage="Build interactive robots and more."
                description="Description for the 'LEGO MINDSTORMS EV3' extension"
                id="gui.extension.ev3.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        peripheralImage: ev3PeripheralImage,
        smallPeripheralImage: ev3MenuImage,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting. Make sure the pin on your EV3 is set to 1234."
                description="Message to help people connect to their EV3. Must note the PIN should be 1234."
                id="gui.extension.ev3.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/ev3'
    },
    {
        name: 'LEGO Education WeDo 2.0',
        extensionId: 'wedo2',
        collaborator: 'LEGO',
        iconURL: wedoImage,
        insetIconURL: wedoMenuImage,
        description: (
            <FormattedMessage
                defaultMessage="Build with motors and sensors."
                description="Description for the 'LEGO WeDo 2.0' extension"
                id="gui.extension.wedo2.description"
            />
        ),
        featured: true,
        disabled: false,
        bluetoothRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: true,
        peripheralImage: wedoPeripheralImage,
        smallPeripheralImage: wedoMenuImage,
        peripheralButtonImage: wedoButtonImage,
        connectingMessage: (
            <FormattedMessage
                defaultMessage="Connecting"
                description="Message to help people connect to their WeDo."
                id="gui.extension.wedo2.connectingMessage"
            />
        ),
        helpLink: 'https://scratch.mit.edu/wedo'

    },
    {
        name: 'Scratch Robot',
        extensionId: 'rulo',
        collaborator: 'TeamSOBITS',
        iconURL: ruloImage,
        insetIconURL: ruloMenuImage,
        featured: true,
        disabled: false,
        internetConnectionRequired: true,
        launchPeripheralConnectionFlow: true,
        useAutoScan: false,
        peripheralImage: rosPeripheralImage,
        smallPeripheralImage: rosMenuImage,
        connectingMessage: 'Connected!',
        helpLink: 'https://github.com',
        description: (
            <FormattedMessage
                defaultMessage="お掃除ロボットなどを作る"
                description="Description for the 'Rulo Scratch' extension"
                id="gui.extension.rulo.description"
            />
        ),
    },
    {
        name: 'Turtlebot',
        extensionId: 'turtlebot',
        collaborator: 'TeamSOBITS',
        iconURL: turtlebotImage,
        insetIconURL: turtlebotMenuImage,
        description: (
            <FormattedMessage
                defaultMessage="Turtlebotのプログラムを作る"
                description="Description for the 'Turtlebot Scratch' extension"
                id="gui.extension.turtlebot.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: true
    },
    {
        name: 'Tensorflow Video Sensing',
        extensionId: 'tfVideoSensing',
        collaborator: 'TeamSOBITS',
        iconURL: tfVideoSensingImage,
        description: (
            <FormattedMessage
                defaultMessage="AIを使った画像認識"
                description="Description for the 'Tensorflow Video Sensing' extension"
                id="gui.extension.tfVideoSensing.description"
            />
        ),
        featured: true,
        disabled: false
    },
    {
        name: 'ifttt',
        extensionId: 'ifttt',
        collaborator: 'TeamSOBITS',
        iconURL: iftttImage,
        insetIconURL: iftttMenuImage,
        description: (
            <FormattedMessage
                defaultMessage="家電を操作しよう"
                description="Description for the 'IFTTT' extension"
                id="gui.extension.IFTTT.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: true
    },
    // 新しい拡張機能の追加
    ////{
        //name: "New Blocks",
        //extensionId: 'newblocks',
        //iconURL: newblocksImage,
        //insetIconURL: newblocksInsetImage,
        //description: "New Extension",
        //featured: true
    //
    {
        name: 'newblocks',
        extensionId: 'newblocks',
        collaborator: 'Me',
        iconURL: newblocksImage,
        insetIconURL: newblocksInsetImage,
        description: (
            <FormattedMessage
                defaultMessage="New blocks."
                description="my block"
                id="gui.extension.newblocks.description"
            />
        ),
        featured: true,
        disabled: false,
        internetConnectionRequired: true
        //bluetoothRequired: false,
        //helpLink: 'https://scratch.mit.edu/wedo'

    }
];
