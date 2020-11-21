const EightBall = ({ answers }) => {
    const [msg, setMsg] = React.useState('Think of a question.');
    const [color, setColor] = React.useState('black');
    const init = () => {
        setMsg('Think of a question.')
        setColor('black');
    };
    const randomMsg = () => {
        const idx = Math.floor(Math.random() * answers.length);
        const choice = answers[idx];
        setMsg(choice.msg);
        setColor(choice.color);
    };

    return (
        <React.Fragment>
            <div className="EightBall" style={{backgroundColor: color}} onClick={randomMsg}>
                <h3>{msg}</h3>
            </div>
            <button onClick={init}>Reset</button>
        </React.Fragment>
    );
}