const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
 
module.exports = {
    entry: ["@babel/polyfill", "./src/js/index.js"],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },
    devServer: {
        contentBase: './dist',
        
    },
    plugins: [
        new HtmlWebpackPlugin({
            
            filename: 'index.html',
            template: './src/index.html',
           
            
        }),
     new HtmlWebpackPlugin({
            
            filename: 'Bartenders.html',
            template: './src/Bartenders.html',
            inject: false
             
     }),
        
new HtmlWebpackPlugin({
            
            filename: 'Gallery.html',
            template: './src/Gallery.html',
            inject: false
               
     }),
  new HtmlWebpackPlugin({
            
            filename: 'BestBars.html',
            template: './src/BestBars.html',
            inject: false
     })
              
        
    ],
module:{
rules:[
    {
    
    
    test:/\.js$/,
    exclude:/node_modules/,

     use:{
         loader:'babel-loader'     
          
         
     }    
    
    
    
}

]    
    
    
    
}    
    
}
