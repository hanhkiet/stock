import {StyleSheet, Text, View} from 'react-native';
import {useCallback, useState} from "react";
import {StockButton} from "./components/StockButton";
import api from "./api";

export default function App() {
    const [stock, setStock] = useState({
        stockName: 'SET',
        stockCode: 'INDEXBKK:SET',
        stockIndex: '0.00',
        stockChangeRaw: '+0.00',
        stockChangePercent: '0.00%',
    });

    const changeIndex = useCallback((stockName, stockCode) => {
        api(stockCode).then((response) => {
            setStock({
                ...data,
                stockName,
                stockCode,
            })
        })
    }, []);

    const colorStyle = (stock.stockChangeRaw && stock.stockChangeRaw[0] === '+')
        ? styles.green
        : styles.red

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.stockName}>
                    {stock.stockName}
                </Text>
                <Text style={styles.stockIndex}>
                    {stock.stockIndex}
                </Text>
                <Text style={[styles.stockChange, colorStyle]}>
                    {stock.stockChangeRaw}
                    {stock.stockChangePercent}
                </Text>
            </View>
            <View style={styles.footer}>
                <StockButton name={'SET'} code={'INDEXBKK: SSET'} onPress={changeIndex}/>
                <StockButton name={'S&P'} code={'INDEXSP: .INX'} onPress={changeIndex}/>
                <StockButton name={'NASDAQ'} code={'INDEXNASDAQ: .IXIC'} onPress={changeIndex}/>
                <StockButton name={'Down Jones'} code={'INDEXDJX: .DJI'} onPress={changeIndex}/>
                <StockButton name={'Shanghai'} code={'SHA: 600630'} onPress={changeIndex}/>
                <StockButton name={'Nikkei'} code={'INDEXNIKKEI: NI225'} onPress={changeIndex}/>
                <StockButton name={'Hang Seng'} code={'INDEXHANGSENG: HSI'} onPress={changeIndex}/>
                <StockButton name={'TESC'} code={'STO: TSEC'} onPress={changeIndex}/>
                <StockButton name={'EURO'} code={'IDX: EURO'} onPress={changeIndex}/>
                <StockButton name={'AAPL'} code={'NASDAQ: AAPL'} onPress={changeIndex}/>
                <StockButton name={'GOOG'} code={'NASDAQ: GOOG'} onPress={changeIndex}/>
                <StockButton name={'MSFT'} code={'NASDAQ: MSFT'} onPress={changeIndex}/>
                <StockButton name={'FB'} code={'NASDAQ: META'} onPress={changeIndex}/>
                <StockButton name={'BABA'} code={'NYSE: BABA'} onPress={changeIndex}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow'
    },
    stockName: {
        fontSize: 30,
    },
    stockIndex: {
        fontSize: 80,
    },
    stockChange: {
        fontSize: 40,
    },
    footer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'pink'
    },
    red: {
        color: 'red',
    },
    green: {
        color: 'green',
    }
});
