import React from 'react';

import { Container, Header, AddButton } from 'src/components';

import { PageTransition } from 'src/components';

class Detail extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            detail: {
                'image' : '',
                'title': 'default 책 제목9',
                'star': '5',
                'author': 'default 지은이',
                'publisher': 'default 출판사',
                'pubdate': 'default 2016',
                'description': 'default Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor id aliquid provident repellendus pariatur, commodi illum neque architecto animi, dicta numquam, inventore accusamus libero, dolorem iste soluta natus unde repellat!',
                'comment': 'default Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit deleniti enim natus tempore, similique inventore laudantium fugiat maxime possimus modi eaque aspernatur aut doloribus! Tempore earum veritatis itaque excepturi vitae?'
            }
        }
        
        console.log('Detail : constructor')
        const callback = function (data){
            this.setState({detail:data});
        }
        this.props.dataDetail(callback);
    }
    componentDidMount(){
        console.log('Detail : componentDidMount');

    }
    render(){
        console.log('Detail : render');
        const detail = this.props.defaultDetail || this.state.detail;
        return (
                <div className="wrap detail_type">
                    <Header title="책 제목" />
    		        <Container>
                        <div className="detail_view">
                            <section className="detail_column basic_column">
                                <h2 className="hidden">기본 책 정보</h2>
                                <div className="detail_img">
                                    <div className="imgbox"><img src={detail.image} alt="" /></div>
                                </div>
                                <div className="box_area">
                                    <h2 className="detail_title">{detail.title}</h2>
                                    <p className="detail_subtitle">{detail.subtitle}</p>
                                    <div className="detail_stars">
                                        <span className="star"></span><span className="star"></span><span className="star"></span>
                                    </div>
                                </div>
                            </section>
                            <section className="detail_column basic_info_column">
                                <h2 className="hidden">상세 책 정보</h2>
                                <div className="box_area">
                                    <dl>
                                        <dt>지은이</dt>
                                        <dd>{detail.author}</dd>
                                    </dl>
                                    <dl>
                                        <dt>출판사</dt>
                                        <dd>{detail.company}</dd>
                                    </dl>
                                    <dl>
                                        <dt>출판연도</dt>
                                        <dd>{detail.year}</dd>
                                    </dl>
                                </div>
                            </section>
                            <section className="detail_column description_column">
                                <div className="box_area">
                                    <h2 className="main_title">책 설명</h2>
                                    <p className="detail_description">
                                        {detail.description}
                                    </p>
                                </div>
                                <button className="btn_detail_more"><span className="hidden">더보기</span></button>
                            </section>
                            <section className="detail_column my_comment_column">
                                <h2 className="hidden">책 감상</h2>
                                <div className="box_area">
                                    <p className="detail_comment">
                                        {detail.comment}
                                    </p>
                                </div>
                            </section>
                        </div>
                        <AddButton />
                    </Container>
                </div>
        )
    }
}

export default Detail;
