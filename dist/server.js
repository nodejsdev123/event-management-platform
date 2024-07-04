"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const eventRoutes_1 = __importDefault(require("./routes/eventRoutes"));
const db_1 = __importDefault(require("./db")); // Ensure this path is correct
const app = (0, express_1.default)();
console.log("server");
// Connect to the database
(0, db_1.default)();
app.use(express_1.default.json());
app.use('/api', eventRoutes_1.default);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
