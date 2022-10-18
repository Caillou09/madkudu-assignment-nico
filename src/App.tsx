
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import { Menu } from 'antd';
import { Link } from "react-router-dom";
import { useFetchData } from './fetcher';

const { Header, Content } = Layout;

function App() {

    const [data, isLoading] = useFetchData();

    return (
        <Layout>
            <Header className={'bg-dark-blue'}>
                <h1 className="text-4xl font-bold text-linen flex justify-center text-center text-white">
                    Assignment Madkudu by Nicolas
                </h1>
            </Header>
            <Content>
                    <Menu mode="horizontal" defaultSelectedKeys={['table']} className={"flex w-full justify-center bg-lavender-green font-bold"}>
                        <Menu.Item key="table">
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
                    <Outlet context={{data : data, isLoading: isLoading}}  />
                </div>
            </Content>

        </Layout>
    );
}

export default App;
