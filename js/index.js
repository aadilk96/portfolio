import Highway from '@dogstudio/highway';
import Fade from './transition';

const H = new Highway.Core ({
    transitions: {
        home: Fade,
        about: Fade,
        projects: Fade
    }
});