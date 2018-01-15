import * as React from 'react';
import { Page } from '../../components';

export interface HomePageProps {
  data: any;
}

export interface HomePageState {
  data: any;
}

export class HomePage extends React.Component<HomePageProps, HomePageState> {
  static async initFetch() {
    const data = await Promise.resolve('111');
    return data;
  }
  constructor(props: any) {
    super(props);
    console.log(1111);
  }
  async componentWillMount() {
    const data = await HomePage.initFetch();
    this.setState({ data });
  }
  render() {
    return (
      <Page name="home">
        home page 홈페이지 HOT loder22

      </Page>
    );
  }
}
