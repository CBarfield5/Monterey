import { PopUp } from "./popUp"
import { useState } from "react"
import { chromeBrowser } from "./chromeBrowser"

export const AppShelf = () => {

    const displayIdenifier = (name) => {
        console.log(`${name} was pressed`);
    }

    const [isOpen, setIsOpen] = useState(false);
 
    const displayName = () => {
      setIsOpen(!isOpen);
    }

    const [isChrome, setIsChrome] = useState(false);
 
    const clickChrome = (name) => {
      setIsChrome(!isChrome);
    }

    return (
        
        <div className='appShelf'>
            <button className='deskAppFinder' onMouseOver={() => displayName('Finder')} onClick={() => displayIdenifier('Finder')}/>
            <button className='deskAppChrome' onMouseOver={() => displayName('Chrome')} onClick={() => clickChrome('Chrome')}/>  
            <button className='deskAppTerminal' onMouseOver={() => displayName('Terminal')} onClick={() => displayIdenifier('Terminal')}/>
            <button className='deskAppTrash' onMouseOver={() => displayName('Trash')} onClick={() => displayIdenifier('Trash')}/>  
            <div className='appDeskDivider'/>  
            {isOpen && <PopUp content={<>
            <b>Design your Popup</b>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button>Test button</button>
            </>}
            handleClose={displayName}
            />}
            {isChrome && <chromeBrowser/>}
        </div>
    )
}

export default AppShelf