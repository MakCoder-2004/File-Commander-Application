# 📂 File Commander Application

A simple file management CLI application built using Node.js.
It reads commands from a `command.txt` file and performs file operations like:

* ✅ Create a file
* ✅ Delete a file
* ✅ Rename a file
* ✅ Append text to a file

---

## 📦 Requirements

* Node.js v14+ (tested on Node.js v22)
* A terminal/console
* A `command.txt` file in the root directory

---

## 🚀 How to Run

1. Clone or download the repository.
2. Make sure your terminal is in the project directory.
3. Run the application:

```bash
node app.js
```

4. Modify the `command.txt` file to issue commands (examples below).
5. The app will automatically detect changes and execute the command.

---

## ✍️ How It Works

* The app continuously watches the `command.txt` file.
* Whenever the file changes, it reads the new command.
* It identifies the action and performs the corresponding file operation.

---

## 📘 Supported Commands

### ✅ Create a file

```
create file filename.txt
```

**Example:**

```
create file notes.txt
```

---

### ❌ Delete a file

```
delete file filename.txt
```

**Example:**

```
delete file notes.txt
```

---

### 🖁 Rename a file

```
rename file oldname.txt -> newname.txt
```

**Example:**

```
rename file notes.txt -> archive.txt
```

---

### ➕ Append text to a file

```
append to file filename.txt -> text to append
```

**Example:**

```
append to file archive.txt -> This is appended content.
```

---

## 📂 Project Structure

```
File Commander Application/
│
├── app.js           # Main application file
├── command.txt      # File where you write your commands
└── README.md        # This file
```

---

## 🛠 Future Improvements

* Add support for updating specific lines in a file
* Add command history logging
* Support reading file contents and displaying them in the console

---

## 🧑‍💻 Author

Makrious Ayman Riad
[LinkedIn](https://www.linkedin.com/in/makrious-ayman-84985621b/)

---
