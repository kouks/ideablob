import { expect } from 'chai'

// TODO: Export
import { Awi } from 'awi'
import { Resource } from '../../src/services/resourceManager/Resource'
import { Manager } from '../../src/services/resourceManager/annotations'
import { ResourceManager } from '../../src/services/resourceManager/ResourceManager'

describe('Resource Manager', () => {

  it('can be assigned via an annotation', () => {
    expect(new NeedsManager().manager).to.be.an.instanceOf(ResourceManager)
  })

  it('loads a resource', async () => {
    // Given.
    const manager: ResourceManager<Todo> = new ResourceManager(Todos)

    ;(manager as any).awi = {
      base: () => new Awi()
        .use(async req => req.base = 'https://jsonplaceholder.typicode.com')
    }

    // When.
    const todos: Todo[] = await manager.list()

    // Then.
    expect(todos.shift())
      .to.have.property('title').that.is.a('string')
    expect(todos.shift())
      .to.have.property('completed').that.is.a('boolean')

  })

})

interface Todo {
  title: string,
  completed: boolean,
}

class Todos extends Resource<Todo> implements Todo {

  get title () : string {
    return this.data.title
  }

  get completed () : boolean {
    return this.data.completed
  }

}

class NeedsManager {

  @Manager<Todo>(Todos)
  public manager: ResourceManager<Todo>

}
