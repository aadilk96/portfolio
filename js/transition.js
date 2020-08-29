import highway from '@dogstudio/highway';
import {
    TimelineLite
} from 'gsap';

class Fade extends highway.Transition {
    in ({
        from,
        to,
        done
    }) {

        const tl = new TimelineLite();
        tl.fromTo(to, 0.5, {
                right: '-100%',
                top: '50%'
            }, {
                left: '0%'
            }).fromTo(to, 0.5, {
                height: '0vh'
            }, {
                height: '100vh',
                top: '0%',
                onComplete: function () {
                    from.remove();
                    done();
                }
            })
            .fromTo(to.children[0], 2, {
                opacity: 0
            }, {
                opacity: 1
            });
    }

    out({
        from,
        done
    }) {
        done();
    }
}

export default Fade;