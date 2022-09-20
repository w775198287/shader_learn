// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const PI = 3.1415;

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    // @property(cc.Label)
    // label: cc.Label = null;

    // @property
    // text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}
    t_time: number = 0;
    s_speed: number = 0.3;
    delay: number = 0;
    n: number = 0;

    

    start () {

    }

    update (dt) {
        this.t_time += dt*this.s_speed;
        if (this.t_time > 1+this.delay) {
            this.t_time = 0;
        }
        // cc.log(this.t_time);
        // cc.log(this.t_time%(0.5*PI))
        // this.n = Math.sin(this.t_time%2*PI);
        this.node.getComponent(cc.Sprite).sharedMaterials[0].setProperty('t_time', this.t_time);
    }
}
