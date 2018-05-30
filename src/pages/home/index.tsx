import * as React from 'react';

export interface HomePageProps {
  data: any;
}
export interface HomePageState {
  data: any;
}

export class HomePage extends React.Component<HomePageProps, HomePageState> {
  static async initFetch(): Promise<any> {
    const data = await Promise.resolve('111');
    return data;
  }
  constructor(props: HomePageProps) {
    super(props);
  }
  async componentWillMount() {
    const data = await HomePage.initFetch();
    this.setState({ data });
  }
  render() {
    return (
      <p>home page 홈페이지 HOT loder22</p>
    );
  }
}
