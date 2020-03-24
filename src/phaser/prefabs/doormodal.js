import Phaser from 'phaser';
import buttonYes from "../../assets/images/buttons/buttonsyes.png";
import buttonNo from "../../assets/images/buttons/buttonsno.png";

let DoorModal = new Phaser.Class ({
    
    Extends: Phaser.Scene,
    initialize:
    function DoorModal ()
    {
        Phaser.Scene.call(this, { key: 'DoorModal' });
    },

    init(data) {
        this.parentScene = data.parentScene;
        this.name = data.name;
    },

    preload() {
        this.load.image("buttonYes", buttonYes);
        this.load.image("buttonNo", buttonNo);
    },

    create() {
        // blend modes //
        /*
        ADD: 1
        COLOR: 15
        COLOR_BURN: 8
        COLOR_DODGE: 7
        COPY: 26
        DARKEN: 5
        DESTINATION_ATOP: 24
        DESTINATION_IN: 22
        DESTINATION_OUT: 23
        DESTINATION_OVER: 21
        DIFFERENCE: 11
        ERASE: 17
        EXCLUSION: 12
        HARD_LIGHT: 9
        HUE: 13
        LIGHTEN: 6
        LIGHTER: 25
        LUMINOSITY: 16
        MULTIPLY: 2
        NORMAL: 0
        OVERLAY: 4
        SATURATION: 14
        SCREEN: 3
        SKIP_CHECK: -1
        SOFT_LIGHT: 10
        SOURCE_ATOP: 20
        SOURCE_IN: 18
        SOURCE_OUT: 19
        XOR: 27
        */
        this.events.on('transitionout', function(toScene, duration) {

            this.tweens.add({
                targets: this,
                alpha: 0,
                duration: 800
            });

        }, this);

        var graphics = this.add.graphics({
            lineStyle: {
                width: 2,
                color: 0x000000,
                alpha: 0.7
            },
            fillStyle: {
                color: 0x000000,
                alpha: 0.7
            }
        });

        var modal = new Phaser.Geom.Rectangle();
        modal.width = 250;
        modal.height = 150;
        graphics.fillRectShape(modal);

        
        this.modalPanel = this.add.image(0, 0, "missionGUI", "Yes");
        this.modalPanel.setScale(0.6, 0.6);
        Phaser.Display.Align.In.Center(this.modalPanel, this.add.zone(modal.width * 0.5, modal.height * 0.5, modal.width, modal.height));
        //

        //NO BUTTON
        this.closeBtn = this.add.image(0, 0, "buttonNo", "No");
        this.closeBtn.setScale(0.05);
        this.closeBtn.x = this.modalPanel.x + this.modalPanel.displayWidth * 0.5 - 50;
        this.closeBtn.y = this.modalPanel.y - this.modalPanel.displayHeight * 0.5 + 30;
        this.closeBtn.setInteractive({
            useHandCursor: true
        });
        this.closeBtn.on(
            'pointerdown',
            function(pointer, item) {
                this.scene.stop("DoorModal");
                return false;
            },
            this
        );

        //YES BUTTON
        this.yesBtn = this.add.image(0, 0, "buttonYes", "Yes");
        this.yesBtn.setScale(0.05);
        this.yesBtn.x = this.modalPanel.x + this.modalPanel.displayWidth * 0.5 + 50;
        this.yesBtn.y = this.modalPanel.y - this.modalPanel.displayHeight * 0.5 + 30;
        this.yesBtn.setInteractive({
            useHandCursor: true
        });
        this.yesBtn.on(
            'pointerdown',
            function(pointer, item) {
                this.scene.stop("DoorModal");
                return true;
            },
            this
        );

        //Label for the Modal
        this.buttonLabel = this.add.text(0, 0, "Enter this Area?", {
            fontFamily: 'fondamentoregular',
            fontSize: 24,
            color: '#ffffff',
            fontStyle: 'normal',
            align: 'center'
        });
        
        //Set this scene on top
        this.scene.bringToTop();
    },

   staggeredShow() {},

    update() {}
})

export default DoorModal;