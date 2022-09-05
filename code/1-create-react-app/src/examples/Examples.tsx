import React from 'react';
import './Examples.scss';

export function Examples(): JSX.Element {
    return (
        <>
            <Example1 prop1="Value">
                {/* <button>Child Button</button> */}
            </Example1>

            <MapExample data={persons.slice()} />

            <FormExample />
        </>
    );
};




// --------------------------------------------------------------------------------------




interface Example1Props {
    prop1: string;
    children?: JSX.Element | JSX.Element[];
}

const Example1 = ({prop1, children, ...props}: Example1Props): JSX.Element => (
    <div {...props}>
        Prop1={prop1 || 'DefaultValue'}
        <br />
        Other props:
        {Object.keys(props).length ? JSON.stringify(props) : 'No other props'}
        <br />
        {children ? <>Children: {children}</> : null}
    </div>
);





// --------------------------------------------------------------------------------------




interface Person {
    id: number;
    name: string;
    birth?: Date;
}

const persons: Person[] = [
    {id: 1, name: 'Koen Koenen'},
    {id: 2, name: 'Tom Elast', birth: new Date('1987-01-25')},
    {id: 3, name: 'Tim Kleine', birth: new Date('2016-01-18')},
    {id: 4, name: 'Bart Berten', birth: new Date('1965-05-12')},
]

interface MapExampleProps {
    data: Person[];
}

const MapExample = ({data}: MapExampleProps) => {
    return (
        <>
            {data.map(p => <PersonCard person={p} key={p.id} />)}
        </>
    );
}

function getAgeInYears(birth: Date): number {
    return new Date().getFullYear() - birth.getFullYear();
}

const PersonCard = ({person}: {person: Person}) => (
    <div className="card">
        <img src={`/avatars/person-${person.id}.png`} alt="Person Avatar" />
        <div>Name: {person.name}</div>
        {person.birth && <div>Age: {getAgeInYears(person.birth)}</div>}
    </div>
)



// --------------------------------------------------------------------------------------



const FormExample = () => {
    const onChange = () => console.log('change');
    return (
        <form>
            <input type="text" onChange={onChange} />
        </form>
    );
}
