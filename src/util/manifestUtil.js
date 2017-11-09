import devManifest from '../static/webpack/developmentManifest';
import prodManifest from '../static/webpack/productionManifest';

export default function(production = true) {
    return production ? prodManifest : devManifest;
}
