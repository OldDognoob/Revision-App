import Component1 from './functional/component1';
import Callback from './functional/callback';
import PrivateComponent from './functional/privatecomponent';
import UnauthRedirect from './functional/unauthredirect';
import Home from './functional/home';
import RenderListItem from './functional/renderlistitem';

import * as ACTIONS from './store/actions/actions';
import HooksContainer1 from './hooks/HooksContainer1';

import Auth from './utils/auth';
import AuthCheck from './utils/authcheck';
import history from './utils/history';

import {Router, Route, Switch, Redirect} from 'react-router';