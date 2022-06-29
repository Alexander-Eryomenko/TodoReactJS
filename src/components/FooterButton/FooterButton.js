import './FooterButton.css'
import Button from "../UI/Button";

const FooterButton = (props) => {
    return (
        <>
            <div className="wrapper-footer-button">
                <div className="count-items">
                    <span>{props.countItems} item</span>
                </div>
                <div className="gap">
                    <Button onClick={props.onShowAll}>All</Button>
                    <Button disabled={!props.someIsFalse} onClick={props.onShowActive} >Active</Button>
                    <Button disabled={!props.triggerButton} onClick={props.onShowCompleted} >Completed</Button>
                </div>
                <div className="gap">
                    <Button onClick={props.onClearItems}>Clear Completed</Button>
                    <Button onClick={props.onSelectItems}>Select all</Button>
                </div>
                <div>
                    {props.triggerButton && <Button onClick={props.onDeleteItems}>Delete completed items</Button>}
                </div>

            </div>
        </>
    )
}

export default FooterButton
