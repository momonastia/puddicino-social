import Logo from "../logo";
import "./index.css";

const NavBar = () => {
  return (
    <div className="NavBar">
      <Logo />
      <ul>
        <li>
          <a href="#">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAQtJREFUSEvtld0RwjAMg6UJgAmACYANYBOYDDaBEcoGdALYwFx6CZcGt6j8vJG3Xh19dqw4xI8Xf6wPGWBmYwDHmNCG5E1JTgJk4ssoWgGQIC8Bhfg5AhYAJEgvwBFfR8AJgATpBHji6dzjPwniAvrEU2NVyBNAER8CaQGGiKuQB8Cx4kT1etx79SycA4LtgjOaRfKlhfOLZmaWfVckV41OVuo3AWeSzaX0mtxkkiows+D9PYBZMRouAHYkg12RKigrVwBBaNoxdy4k558CWhVlR1pW6sYpFfwB7faVbuhyhxrn9SC8VCPltXJiapItO3uA4PtDjzW72DWAbboXj4nwZqbytkHzRlbNAu/N8t0Z2j1f+wAAAABJRU5ErkJggg=="
              alt=""
            />
            Home
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAihJREFUSEu1leFRFFEQhLsjECJQIhAjUCIQM8AIgAjECJQINAMhAiECNAIgA4hgrG9rZp3d27vjz03VVV3tvjfd0z0za+04vOP82goQER8kvZd0mD84/cnfje3bTSTXAkTEG0k/JAGwKW4kfbb9sHRoESAiziR9kbQn6VHST0kkgjlBNQCfSHot6UnShe3LOcgKQCb/lge5wEUSrEREQOBC0mm+PLf9vR+cAKQsd8n8k+0rDudzQEsuqiHZIEtEHEv6lZW863LNAbiIoZe2kamSF2gnR1VjsoiAOZVg/FEdHAEaCzQ/LFkigio+AiqpygecZNe2YQ8R5MIjPDmyDdn/bRoRaImxX23zf4iIgOkrSQdNEjrsHkls77ezKzl6BSXPiP4CgGfbMC8y5cVYWQcopvu9a5pEyFNtiDzINCZqflHZg+2DuUSRROYAyIG2yNTjOb0aByy7DQDZHsj3CkjythvUSgeECnqbns2ntzXKre3hbAeobpmYnKUzuYADRMD6r+2a7PKgTF70oAziMv39FBEk7gM2U2lYH8MeyjZlXiAxDul80EhOHw8rIluxuuR6touYDYLmwNBaGY+2q9Lpus7V/Dsvwg4dJ4PXfOmDVWd5PWnzpWVXI1+5Jhe6Rs3Uerzi37p1zRrmW1CGAopxtdyQAImYhZIDL1jrk9j0wUEedGX5bQq+aKz0Yfe8GKBpDRAdtvTJvFqXuO5v/SZvYb/19c4B/gFZkgkoMuO7UwAAAABJRU5ErkJggg=="
              alt=""
            />{" "}
            Profile
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAatJREFUSEu9Ve1RAjEU3K1EbUCkAi0BKtAOhApAGxAqUCsAO9AKBG0AKllnmeTMhdzHjINvJj8uye2+j30vxImNJ8ZHJ4GkOwDXAK7Csk+bsNYk39qcbCSQNALwBOC8I8odgCnJdelekUDSAsB9+GEPwN/vJO05JDmaGwATAGfh3oLkNCc5IsjA7ZnBG02SSRypbUnS35XVCEJaVuF0GD3uEkKI6DPcG6fpygmcT4fc6XlOmkSyI3kRzyuCoJZnAHuSrYWVNAAwBjAi6XocTFJ0sIoiJXgBcNvkfQoKwAS2OcmHhCDW45Wk5f3bB5KsEP94lPsAflBQZgOSXwmBo3EtNiSHOYEOG2RJWXMAswy8Akn3JdVw0hS1EcToUqwZycdCsRsJiilqSc8lye/M+5iibSx+Z5ElpenZAnCfrNLc9y2yZ49/ruk4FN/7HmwmaLRWmWY6/kuj1frof0dFiCKdpBOSy4609B92SbFSEre/vz+yce1HyOBxrBxN0lqjFfTsohs4zvumQPxeONL+D06mbRN5WeNxBllN7hsrqwgcMTrf5Lb89zk7OcEPUUnkGSYaZmkAAAAASUVORK5CYII="
              alt=""
            />{" "}
            Esplore
          </a>
        </li>
        <li>
          <a href="#">
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXFJREFUSEu9VdFRwzAUkyYBJoBOACPABLAB7SS0EwATUDaACWg3aCd5Pd09B+fFrnOlwXf5yMV5kt6TZWLixYnrowlgZk8AbgHc+CNOG3/WJD+PkawCmNk9gBcAlw2VOwALkuvSviKAmS0BPPsPewB6/yIp5jAzqbkDMAdw4fuWJBcRZAAQiouZileXmQlESrVWJPXerR6At+XDv84S45YRXNGP73vI2xUB1E9JLjI3M1MRkiXlScmO5FUi1W10t7wC2JMsDvYYgM8mEexU5ABvAB5r7L1AVYF/TyreScrev+fAzOSQawDV3o9QIHdpFhuSswgwYJcKtoaczySSyFs0OcA5W7QlqXb1ZjD5kJU9OmQ9H+f9HzHkuk2Dj/9y0Hrn6H+jwlXkSTonuTpb2KVCIVHVV4F+h7jWJaSTm2JlkKQ9F0WWnqwqnPK+JkT3hZSOv3CCc+QuPfK1okRrm12ZxcKDNG3Fwanfm5f+qYXTfwfi7uIZoIUoYQAAAABJRU5ErkJggg=="
              alt=""
            />{" "}
            Create
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
