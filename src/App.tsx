
import { Layout } from 'antd';
import { Outlet, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import { Link } from "react-router-dom";
import { useFetchData } from './hooks/useFetchData';
import { useState } from 'react';

const { Header, Content } = Layout;

function App() {
    const location = useLocation()
    
    const { data, isLoading } = useFetchData();
    const [selected, setSelected] = useState(location.pathname.replace(/\//, ""))

    return (
        <Layout>
            <Header className={'bg-dark-blue'}>
                <h1 className="text-4xl font-bold text-linen flex justify-center text-center">
                    Assignment Madkudu by Nicolas
                </h1>
            </Header>
            <Content>
                <Menu
                    mode="horizontal"
                    className={"flex w-full justify-center bg-lavender-green font-bold"}
                    onClick={({ key }) => setSelected(key)}
                    selectedKeys={[selected]}
                >
                    <Menu.Item key="">
                        <Link to="/" className={'text-white'}>
                            Table
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="chart">
                        <Link to="chart" className={'text-white'}>
                            Chart
                        </Link>
                    </Menu.Item>
                </Menu>
                <div className="flex justify-center items-start h-screen bg-light-purple pt-12">
                    <Outlet context={{ data: data, isLoading: isLoading }} />
                </div>
            </Content>

        </Layout>
    );
}

export default App;
