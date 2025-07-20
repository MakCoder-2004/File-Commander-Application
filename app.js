const fs = require("fs/promises");
const fsSync = require("fs"); // For fs.watch
const path = require("path");

// Commands
const Create_File = "create file";
const Delete_File = "delete file";
const Update_File = "update file"; // Reserved for future
const Rename_File = "rename file";
const Append_To_File = "append to file";

// Create a file function
const createFile = async (filePath) => {
  try {
    await fs.access(filePath);
    console.log("File already exists");
  } catch {
    await fs.writeFile(filePath, "");
    console.log("File created successfully");
  }
};

// Delete a file function
const deleteFile = async (filePath) => {
  try {
    await fs.unlink(filePath);
    console.log("File deleted successfully");
  } catch (err) {
    console.log("Error deleting file:", err.message);
  }
};

// Rename a file function
const renameFile = async (oldPath, newPath) => {
  try {
    await fs.rename(oldPath, newPath);
    console.log("File renamed successfully");
  } catch (err) {
    console.log("Error renaming file:", err.message);
  }
};

// Append to file function
const appendToFile = async (filePath, text) => {
  try {
    await fs.appendFile(filePath, text);
    console.log("Text appended to file successfully");
  } catch (err) {
    console.log("Error appending to file:", err.message);
  }
};

// Handle command
const handleCommand = async () => {
  try {
    const content = await fs.readFile("./command.txt", "utf-8");
    const trimmed = content.trim();

    if (trimmed.startsWith(Create_File)) {
      const filePath = trimmed.substring(Create_File.length + 1).trim();
      await createFile(filePath);
    } else if (trimmed.startsWith(Delete_File)) {
      const filePath = trimmed.substring(Delete_File.length + 1).trim();
      await deleteFile(filePath);
    } else if (trimmed.startsWith(Rename_File)) {
      // Format: rename file oldPath -> newPath
      const parts = trimmed.substring(Rename_File.length + 1).split("->");
      if (parts.length === 2) {
        const oldPath = parts[0].trim();
        const newPath = parts[1].trim();
        await renameFile(oldPath, newPath);
      } else {
        console.log(
          "Invalid rename file command format. Use: rename file old.txt -> new.txt"
        );
      }
    } else if (trimmed.startsWith(Append_To_File)) {
      // Format: append to file filePath -> text to append
      const parts = trimmed.substring(Append_To_File.length + 1).split("->");
      if (parts.length === 2) {
        const filePath = parts[0].trim();
        const textToAppend = parts[1];
        await appendToFile(filePath, textToAppend);
      } else {
        console.log(
          "Invalid append to file command format. Use: append to file notes.txt -> Hello World"
        );
      }
    } else {
      console.log("Unknown or unsupported command.");
    }
  } catch (err) {
    console.error("Failed to read command.txt:", err.message);
  }
};

// Initial read
handleCommand();

// Watch the file
fsSync.watch("./command.txt", (eventType, filename) => {
  if (eventType === "change") {
    handleCommand();
  }
});
