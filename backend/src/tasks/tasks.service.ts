import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Task, TaskStatuses } from "./tasks.entity";

@Injectable()
export class TasksService {

    async getTasks() {
        return await this.rep.find({ where: { isDeleted: false } });
    }

    async statusChange(taskId: number, status: TaskStatuses) {
        const item = await this.rep.findOne({ where: { id: taskId } });

        if (item) {
            item.status = status;
            this.rep.save(item);
        }
    }

    async addTask(item: Task) {
        if (!item.task) {
            throw new HttpException("על איזו משימה כבודו מדבר?", HttpStatus.BAD_REQUEST);
        }

        item.status = TaskStatuses.open;
        item.id = null;
        item.createTime = new Date();

        return await this.rep.save(item);
    }

    async removeTask(taskId: number) {
        const item = await this.rep.findOne({ where: { id: taskId } });

        if (item) {
            item.isDeleted = true;
            this.rep.save(item);
        }
    }

    constructor(
        @InjectRepository(Task)
        private rep: Repository<Task>
    ) { }
}
