import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TableComp } from './TableComp';

//Mocking of useOutletContext to get data
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useOutletContext: () => ({
        data: mockedData,
    }),
}));

//If we mock methods not implemented in JSDOM (such as useOutletContext), use this
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: jest.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(), // deprecated
      removeListener: jest.fn(), // deprecated
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
    })),
  });


let mockedData =
    [
        {
            "name": "Addax",
            "continent": "Africa",
            "weight": 220,
            "height": 41,
            "horns": "Twisted",
            "picture": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/A_big_male_Addax_showing_as_the_power_of_his_horns.jpg/1280px-A_big_male_Addax_showing_as_the_power_of_his_horns.jpg"
        },
        {
            "name": "Arabian oryx",
            "continent": "Asia",
            "weight": 150,
            "height": 39,
            "horns": "Straight",
            "picture": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Arabian_oryx_(oryx_leucoryx).jpg/1280px-Arabian_oryx_(oryx_leucoryx).jpg"
        },
        {
            "name": "Bay duiker",
            "continent": "Africa",
            "weight": 40,
            "height": 17,
            "horns": "Spiky",
            "picture": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Cephalophus_dorsalis.JPG/1920px-Cephalophus_dorsalis.JPG"
        },
    ]

function setup() {
    return (
        <TableComp/>
    )
}

describe('Test suite for Table', () => {
    test('render correctly', () => {
        const { container } = render(setup());
        expect(container).toBeInTheDocument();
    }),

    test('should have n rows of data depedning on mocked data', () => {
        const { container } = render(setup());
        let rows = container.querySelectorAll('.ant-table-row ');
        expect(rows.length).toEqual(3);
    })
})