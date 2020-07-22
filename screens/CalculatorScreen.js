import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import Button from "../src/Button";

export default class CalculatorScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue: "",
            prevValue: null,
            operator: null,
            memory: "0",
        };
    }

    handleTap = (type, value) => {
        if (type === "number") {
            if (
                this.state.currentValue.length >= 9 ||
                (this.state.currentValue === "0" && value === 0)
            ) {
                return;
            }
            this.setState({
                currentValue: this.state.currentValue + value,
            });
        }

        if (type === "operator") {
            this.setState({
                prevValue: this.state.currentValue,
                currentValue: "",
                operator: value,
            });
        }

        if (type === "AC") {
            this.setState({
                currentValue: "",
                prevValue: null,
                operator: null,
            });
        }

        if (type === "plusMinus") {
            this.setState({
                currentValue: String(parseFloat(this.state.currentValue) * -1),
            });
        }

        if (type === "percentage") {
            if (this.state.prevValue === null) {
                this.setState({
                    currentValue: String((parseFloat(this.state.currentValue) * 0.01).toFixed(2)),
                });
            } else {
                this.setState({
                    currentValue: String(
                        (
                            parseFloat(this.state.prevValue) *
                            (parseFloat(this.state.currentValue) / 100)
                        ).toFixed(2)
                    ),
                });
            }
        }

        if (type === "mc") {
            this.setState({
                memory: "0",
            });
        }

        if (type === "mr") {
            this.setState({
                currentValue: this.state.memory,
            });
        }

        if (type === "m-") {
            this.setState({
                memory: String(parseFloat(this.state.memory) - parseFloat(this.state.currentValue)),
            });
        }

        if (type === "m+") {
            this.setState({
                memory: String(parseFloat(this.state.memory) + parseFloat(this.state.currentValue)),
            });
        }

        if (type === "=") {
            const currentValue = parseFloat(this.state.currentValue);
            const prevValue = parseFloat(this.state.prevValue);
            const operator = this.state.operator;

            if (operator === "+") {
                this.setState({
                    currentValue: String(parseFloat((prevValue + currentValue).toFixed(2))),
                    prevValue: null,
                    operator: null,
                });
            }

            if (operator === "÷") {
                this.setState({
                    currentValue: String(parseFloat((prevValue / currentValue).toFixed(2))),
                    prevValue: null,
                    operator: null,
                });
            }

            if (operator === "-") {
                this.setState({
                    currentValue: String(parseFloat((prevValue - currentValue).toFixed(2))),
                    prevValue: null,
                    operator: null,
                });
            }

            if (operator === "x") {
                this.setState({
                    currentValue: String(parseFloat((prevValue * currentValue).toFixed(2))),
                    prevValue: null,
                    operator: null,
                });
            }
        }
    };
    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.resultContainer}>
                    <Text style={styles.resultText}>
                        {this.state.currentValue === "" && this.state.prevValue === null ? "0" : ""}
                        {this.state.prevValue === null ? "" : this.state.prevValue}
                        {this.state.operator === null ? "" : this.state.operator}
                        {this.state.currentValue === "" ? "" : this.state.currentValue}
                    </Text>
                </View>
                <View style={styles.inputContainer}>
                    <View style={styles.buttonRow}>
                        <Button
                            onPress={() => this.handleTap("AC")}
                            title="AC"
                            backgroundColor="#A3A3A3"
                        />
                        <Button
                            onPress={() => this.handleTap("plusMinus")}
                            title="+/-"
                            backgroundColor="#A3A3A3"
                        />
                        <Button
                            onPress={() => {
                                this.handleTap("percentage");
                            }}
                            title="%"
                            backgroundColor="#A3A3A3"
                        />
                        <Button
                            onPress={() => {
                                this.handleTap("operator", "÷");
                            }}
                            title="÷"
                            backgroundColor="#FE990A"
                        />
                    </View>
                    <View style={styles.buttonRow}>
                        <Button
                            onPress={() => {
                                this.handleTap("mc");
                            }}
                            title="mc"
                        />
                        <Button
                            onPress={() => {
                                this.handleTap("mr");
                            }}
                            title="mr"
                        />
                        <Button
                            onPress={() => {
                                this.handleTap("m-");
                            }}
                            title="m-"
                        />
                        <Button
                            onPress={() => {
                                this.handleTap("m+");
                            }}
                            title="m+"
                            backgroundColor="#FE990A"
                        />
                    </View>
                    <View style={styles.buttonRow}>
                        <Button
                            onPress={() => {
                                this.handleTap("number", 7);
                            }}
                            title="7"
                        />
                        <Button
                            onPress={() => {
                                this.handleTap("number", 8);
                            }}
                            title="8"
                        />
                        <Button
                            onPress={() => {
                                this.handleTap("number", 9);
                            }}
                            title="9"
                        />
                        <Button
                            onPress={() => {
                                this.handleTap("operator", "x");
                            }}
                            title="x"
                            backgroundColor="#FE990A"
                        />
                    </View>
                    <View style={styles.buttonRow}>
                        <Button
                            onPress={() => {
                                this.handleTap("number", 4);
                            }}
                            title="4"
                        />
                        <Button
                            onPress={() => {
                                this.handleTap("number", 5);
                            }}
                            title="5"
                        />
                        <Button
                            onPress={() => {
                                this.handleTap("number", 6);
                            }}
                            title="6"
                        />
                        <Button
                            onPress={() => {
                                this.handleTap("operator", "-");
                            }}
                            title="-"
                            backgroundColor="#FE990A"
                        />
                    </View>
                    <View style={styles.buttonRow}>
                        <Button
                            onPress={() => {
                                this.handleTap("number", 1);
                            }}
                            title="1"
                        />
                        <Button
                            onPress={() => {
                                this.handleTap("number", 2);
                            }}
                            title="2"
                        />
                        <Button
                            onPress={() => {
                                this.handleTap("number", 3);
                            }}
                            title="3"
                        />
                        <Button
                            onPress={() => {
                                this.handleTap("operator", "+");
                            }}
                            title="+"
                            backgroundColor="#FE990A"
                        />
                    </View>
                    <View style={styles.buttonRow}>
                        <Button
                            onPress={() => {
                                this.handleTap("number", 0);
                            }}
                            title="0"
                            style={{ flex: 0.8, alignItems: "flex-start", paddingLeft: 32 }}
                        />
                        <Button
                            onPress={() => {
                                this.handleTap("number", ".");
                            }}
                            title="."
                        />
                        <Button
                            onPress={() => {
                                this.handleTap("=");
                            }}
                            title="="
                            backgroundColor="#FE990A"
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    resultContainer: {
        flex: 2,
        backgroundColor: "black",
        justifyContent: "flex-end",
    },
    resultText: {
        color: "white",
        fontSize: 60,
        marginRight: 30,
        textAlign: "right",
    },
    inputContainer: {
        justifyContent: "flex-end",
        backgroundColor: "black",
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
});
