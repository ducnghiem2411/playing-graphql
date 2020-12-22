import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Cat } from './interfaces/cat.interface';
import { CatInput, EditCatInput } from './inputs/cat.input';

@Injectable()
export class CatsService {
  constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) {}

  async create(createCatDto: CatInput): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return await createdCat.save();
  }

  async findAll(page, limit): Promise<Cat[]> {
    const cats = await this.catModel.find()
    .skip(limit*page - limit)
    .limit(limit)
    .sort({ name: 'desc' })
    .exec()
    console.log('cats', cats);
    return cats
  }

  async findById(id: string): Promise<Cat> {
    return await this.catModel.findById(id)
  }

  async edit(id: string, editInput: EditCatInput) {
    const editedCat = await this.catModel.findOneAndUpdate({ _id: id }, editInput, { new: true })
    return editedCat
  }

  async delete(id: string) {
    const deletedCat = await this.catModel.findByIdAndDelete(id)
    console.log('deletedCat', deletedCat);
    return deletedCat
  }
}
