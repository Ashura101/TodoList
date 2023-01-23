import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  Modal,
} from "react-native";

const ToDoList = () => {
  const [taskName, setTaskName] = useState(""); //state variable to take new task name input
  const [taskDescription, setTaskDescription] = useState(""); //state variable to take new task description input
  // const [screenUpdate, setScreenUpdate] = useState(); //Fix for screen not updating updating issue
  const [modalVisible, setModalVisible] = useState(false); //Edit task modal state
  const [modalName, setModalName] = useState("");
  const [modalDescription, setModalDescription] = useState("");
  const [modalIndex, setModalIndex] = useState("");

  //todo list state declaration
  const [task, setTask] = useState([]);
  //todo list state declaration end

  //Adding the new task to the todo list state
  const addTask = () => {
    if (taskName.trim() == "") {
      alert("No task name");
    } else if (taskDescription.trim() == "") {
      alert("No task description");
    } else {
      const newTask = {
        name: taskName,
        description: taskDescription,
        completed: false,
      };
      setTask([...task, newTask]);
      setTaskName("");
      setTaskDescription("");
    }
  };
  //Adding the new task to the todo list state

  //Edit logic
  const editTaskWindowCall = (value, taskName, taskDescription, index) => {
    setModalVisible(value);
    setModalName(taskName);
    setModalDescription(taskDescription);
    setModalIndex(index);
  };
  let newModalName;
  let newModalDescription;
  const onChangeModalName = (nmodalName) => {
    newModalName = nmodalName;
  };
  const onChangeModalDescription = (nmodalDesc) => {
    newModalDescription = nmodalDesc;
  };
  const editTask = () => {
    let temp2 = Object.assign([], task, {
      [modalIndex]: {
        name: newModalName,
        description: newModalDescription,
        completed: false,
      },
    });
    setTask(temp2);
  };
  //Edit logic ends

  //Task complete logic
  const completeTask = (taskName, taskDescription, index) => {
    // const updatedTasks = task.map((item) => {
    //   if (item.name == taskName && item.description == taskDescription) {
    //     return { ...item, completed: true };
    //   }
    //   return item;
    // });

    let temp = Object.assign([], task, {
      [index]: {
        name: taskName,
        description: taskDescription,
        completed: true,
      },
    });

    setTask(temp);
  };
  //Task complete logic ends

  //Task delete logic
  const deleteTask = (index) => {
    // const removeIndex = task.findIndex(
    //   (item) => item.name == taskName && item.description == taskDescription
    // );
    // task.splice(removeIndex, 1);

    task.splice(index, 1);
    let temp = Object.assign([], task);
    setTask(temp);
    // setScreenUpdate(Math.random());
  };
  //Task delete logic ends

  //Keyboard Fix

  //Keyboard Fix ends

  const ModalDisplay = () => {
    return (
      <Modal
        animationType={"slide"}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          alert("Modal closed");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.editText}>Edit Task</Text>
            <View style={styles.modalInputView}>
              <TextInput
                style={styles.modalInput}
                placeholder={modalName}
                onChangeText={(item) => onChangeModalName(item)}
              ></TextInput>
              <TextInput
                style={styles.modalInput}
                placeholder={modalDescription}
                onChangeText={(item) => onChangeModalDescription(item)}
              ></TextInput>
            </View>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => editTask()}
            >
              <Text style={styles.modelButtonText}>Save</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={() => editTaskWindowCall(false)}
            >
              <Text style={styles.modelButtonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };
  //Displaying the task list
  const ListDisplay = ({ task, index }) => {
    return (
      <View style={styles.listDisplay}>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              color: "white",
              textDecorationLine: task?.completed ? "line-through" : "none",
              fontSize: 20,
              fontWeight: "bold",
              padding: 2,
            }}
          >
            {task?.name}
          </Text>
          <Text
            style={{
              color: "white",
              textDecorationLine: task?.completed ? "line-through" : "none",
            }}
          >
            {task?.description}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.taskButtons}
          onPress={() =>
            editTaskWindowCall(true, task?.name, task?.description, index)
          }
        >
          <Text>Edit</Text>
        </TouchableOpacity>

        {!task?.completed && (
          <TouchableOpacity
            style={styles.taskButtons}
            onPress={() => completeTask(task?.name, task?.description, index)}
          >
            <Text>Complete</Text>
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={styles.taskButtons}
          onPress={() => deleteTask(index)}
        >
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
    );
  };
  //Displaying the task list ends

  //Main screen render
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titleText}>My Todos</Text>
      </View>
      <View style={styles.createTask}>
        <TextInput
          style={styles.inputField}
          placeholder="Name"
          value={taskName}
          onChangeText={(item) => setTaskName(item) /*onChangeName(item)*/}
        ></TextInput>

        <TextInput
          style={styles.inputField}
          placeholder="Description"
          value={taskDescription}
          onChangeText={(item) => setTaskDescription(item)}
        ></TextInput>

        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.buttonText} onPress={() => addTask()}>
            Add Task
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.taskListView}>
        <FlatList
          data={task}
          renderItem={({ item, index }) => (
            <ListDisplay task={item} index={index} />
          )}
        ></FlatList>
        <ModalDisplay />
      </View>
    </SafeAreaView>
  );
};

//CSS
const styles = StyleSheet.create({
  // Main Container CSS Starts
  container: {
    flex: 1,
    // padding:5,
    backgroundColor: "#000000",
    // backgroundColor:"pink",
    justifyContent: "space-between",
  },

  //Title CSS (My Todos) Starts
  title: {
    flex: 0.2,
    flexDirection: "row",
    // paddingTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 40,
    color: "white",
  },
  //Title CSS (My Todos) Starts

  //Create Task CSS Starts
  createTask: {
    flex: 0.05,
    flexDirection: "row",
    backgroundColor: "#1a1a1a",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 5,
    paddingTop: 20,
    paddingBottom: 20,
    marginBottom: 5,
  },
  inputField: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    margin: 5,
    borderRadius: 10,
    padding: 10,
    height: 35,
  },
  addButton: {
    flex: 0.5,
    padding: 5,
    backgroundColor: "#ff4e21",
    height: 35,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
  },
  //Create Task CSS Starts

  //Task View CSS Starts
  taskListView: {
    flex: 0.75,
  },
  listDisplay: {
    padding: 20,
    backgroundColor: "#1a1a1a",
    flexDirection: "row",
    elevation: 10,
    marginTop: 1,
    alignItems: "center",
  },
  // taskView: {
  //   flex:0.8,
  //   backgroundColor:"#1a1a1a",
  //   padding: 5
  // },
  taskButtons: {
    backgroundColor: "white",
    padding: 4,
    borderRadius: 50,
    margin: 2,
  },
  //Task View CSS Ends

  //Modal view
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  modalView: {
    flex: 0.5,
    borderRadius: 20,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#dbdbdb",
  },
  editText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  modalButton: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 50,
    margin: 10,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  modelButtonText: {
    color: "white",
    justifyContent: "center",
    fontSize: 20,
  },
  modalInputView: {
    flex: 1,
    justifyContent: "space-evenly",

    alignSelf: "stretch",
    borderRadius: 20,
  },
  modalInput: {
    backgroundColor: "white",
    margin: 5,
    borderRadius: 50,
    height: 50,
    padding: 10,
    fontSize: 20,
  },

  //Modal view ends

  //CSS Ends
});
export default ToDoList;
