import React from 'react';
import {
    TabContent, TabPane, Card, CardHeader, CardTitle, CardBody, Row, Col, //Nav, NavItem, NavLink,
} from 'reactstrap';
import { connect } from 'react-redux';

import TabMenu from './TabMenu.jsx';

function Panels(props) { 
    return (
        <TabContent className="tab-space tab-subcategories" activeTab={props.pageSub}>
            <TabPane tabId="ps1">
                Далеко-далеко за, словесными горами в стране гласных и согласных живут рыбные тексты. По всей lorem страна, коварных рукописи журчит первую семантика речью снова диких, использовало, продолжил строчка на берегу заголовок залетают пор. Они, продолжил!
                <br/><br/>
                Далеко-далеко за, словесными горами в стране гласных и согласных живут рыбные тексты. Текстами они, диких бросил возвращайся маленькая семантика ее собрал послушавшись, великий своих lorem ручеек запятых если буквенных инициал. Жизни, грамматики?
                Страна алфавит заглавных вопрос lorem. Ты свой рукописи, то использовало послушавшись свою? Он точках домах но текст парадигматическая что раз все даже безорфографичный. Пустился о выйти эта бросил, над гор.
                Всеми ручеек послушавшись свой продолжил инициал моей там снова несколько которой, живет диких речью. Большой моей вершину скатился океана, агентство языкового текст однажды своего коварных, текстов, вскоре то ты рыбными.
                
            </TabPane>
            <TabPane tabId="ps2">
                Далеко-далеко за, словесными горами в стране гласных и согласных живут рыбные тексты. По всей lorem страна, коварных рукописи журчит первую семантика речью снова диких, использовало, продолжил строчка на берегу заголовок залетают пор. Они, продолжил!
                <br/><br/>
                Далеко-далеко за, словесными горами в стране гласных и согласных живут рыбные тексты. Текстами они, диких бросил возвращайся маленькая семантика ее собрал послушавшись, великий своих lorem ручеек запятых если буквенных инициал. Жизни, грамматики?
                Страна алфавит заглавных вопрос lorem. Ты свой рукописи, то использовало послушавшись свою? Он точках домах но текст парадигматическая что раз все даже безорфографичный. Пустился о выйти эта бросил, над гор.
                Всеми ручеек послушавшись свой продолжил инициал моей там снова несколько которой, живет диких речью. Большой моей вершину скатился океана, агентство языкового текст однажды своего коварных, текстов, вскоре то ты рыбными.
               
            </TabPane>
            <TabPane tabId="ps3">
                Далеко-далеко за, словесными горами в стране гласных и согласных живут рыбные тексты. По всей lorem страна, коварных рукописи журчит первую семантика речью снова диких, использовало, продолжил строчка на берегу заголовок залетают пор. Они, продолжил!
                <br/><br/>
                Далеко-далеко за, словесными горами в стране гласных и согласных живут рыбные тексты. Текстами они, диких бросил возвращайся маленькая семантика ее собрал послушавшись, великий своих lorem ручеек запятых если буквенных инициал. Жизни, грамматики?
                Страна алфавит заглавных вопрос lorem. Ты свой рукописи, то использовало послушавшись свою? Он точках домах но текст парадигматическая что раз все даже безорфографичный. Пустился о выйти эта бросил, над гор.
                Всеми ручеек послушавшись свой продолжил инициал моей там снова несколько которой, живет диких речью. Большой моей вершину скатился океана, агентство языкового текст однажды своего коварных, текстов, вскоре то ты рыбными.


            </TabPane>
        </TabContent>
    );
}

function mapStateToProps(state){
    return {
        pageSub: state.userProfile.pageSubcategories
    }
};

export default connect(mapStateToProps)(Panels);

//<TabContent className="tab-space tab-subcategories" activeTab={this.state.pageSubcategories}>