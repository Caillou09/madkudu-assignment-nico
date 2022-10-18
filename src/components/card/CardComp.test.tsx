import { render, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { CardComp } from './CardComp';



let mockedCardData =
{
    "name": "Addax",
    "continent": "Africa",
    "weight": 220,
    "height": 41,
    "horns": "Twisted",
    "picture": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/A_big_male_Addax_showing_as_the_power_of_his_horns.jpg/1280px-A_big_male_Addax_showing_as_the_power_of_his_horns.jpg"
}


function setup() {
    return (
        <CardComp data={mockedCardData} />
    )
}

describe('Test suite for Card Component', () => {
    test('render correctly', () => {
        const { container } = render(setup());
        expect(container).toBeInTheDocument();
    }),
        test('should render card with right props', async () => {
            const { container } = render(setup());
            let img = container.querySelector('img');
            let name = container.querySelector('.ant-card-meta-titl');
            let continent = container.querySelector('ant-card-meta-description');
            await waitFor( () => {
                expect(img).toBeInTheDocument
                expect(name).toBeInTheDocument
                expect(continent).toBeInTheDocument
            })
        })
         
})