### yarn으로 create react app
<ul>
    <li>1. npm install -g yarn</li>
    <li>2. yarn create react-app router-tutorial</li>
</ul>


<hr/>

### constructor에서 
### -> super(props)를 선언하지 않으면 
### this.state를 사용할 수 없다

<hr/>

### css 적용
### app.css 수정 후 "import './App.css';
### 그대로 쓰면 됨

<hr/>

### getDerivedStateFromProps "constructor" 다음으로 실행되는 함수
### props, state를 인자로 받으며 props[key] 로 접근해 사용 가능

<hr/>
    <h3>react 생명주기 = [<span style="color:red">생성</span>, 변경, 소멸]</h3>
    <ul>
        <li>1. constructor</li>
        <li>2. getDerivedStateFromProps</li>
        <li>3. componentDidMount</li>
    </ul>
    <p>
        "componentDidMount"는 다 그려지고 render 된 후에 해야하는
        <span style="color:red;">이벤트 처리, 초기화</span> 등을 많이 사용한다.
        여기서 "setState"로 <span style="color:red;">state 데이터에 추가/변경할 수 있다.</span>
    </p>
    <h3>react 생명주기 = [생성, <span style="color:red">변경</span>, 소멸]</h3>
    <ul>
        <li>1. shouldComponentUpdate() ::: 렌더링이 다시 되며 제어를 할 수 있다.</li>
    </ul>
    <p>
        shouldComponentUpdate는 
        return 시켜줘야함. 이유는 모르겠음
    </p>
    

<hr/>



<hr/>
