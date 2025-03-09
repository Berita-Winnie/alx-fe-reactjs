import {Routes, Route, Link} from 'react-router-dom';
import ProfileDetails from './ProfileDetails';
import ProfileSettings from './ProfileSettings';

const profile = () => {
    return (
        <div>
            <h2>Profile</h2>
            <Link to="details">Profile Details</Link>
            <Link to="settings">Settings</Link>
            <Routes>
                <Route path="detaiils" element={< ProfileDetails/>} />
                <Route path="settings" element={< ProfileSettings/>} />
            </Routes>
        
        </div>
        
    );
};
export default profile;