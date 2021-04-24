import Document, { Html, Head, Main, NextScript }  from 'next/document'

export default class myDocument extends Document {
    render() {        
        return (
            <Html>
                <Head>
                    <meta property = 'custom' content = 'hi bye'/>
                    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />                 
                    </Head>
                <body>                    
                    <Main />
                </body>
                <NextScript />
            </Html>
        )
    }
}
